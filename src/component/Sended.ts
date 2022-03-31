import { DomNode, el } from "@hanul/skynode";
import { BigNumber, utils } from "ethers";
import APMReservoirContract from "../contract/APMReservoirContract";
import GaiaBridgeInterface from "../contract/GaiaBridgeInterface";
import EthereumNetworkProvider from "../ethereum/EthereumNetworkProvider";

export default class Sended extends DomNode {

    private fromImage: DomNode<HTMLImageElement> | undefined;
    private toImage: DomNode<HTMLImageElement> | undefined;

    private fromChainText: DomNode | undefined;
    private toChainText: DomNode<HTMLImageElement> | undefined;

    constructor(
        private fromSender: GaiaBridgeInterface,
        private toSender: GaiaBridgeInterface,

        private fromChainId: number,
        private toChainId: number,

        private sender: string,
        private receiver: string,

        private sendingId: number,

        private retry: () => void,
    ) {
        super("tbody");
        this.load();
        this.toSender.on("ReceiveToken", this.receiveTokenHandler);
    }

    private async load() {
        const sended = await this.fromSender.sendedAmounts(this.sender, this.toChainId, this.receiver, this.sendingId);
        const received = await this.toSender.isTokenReceived(this.sender, this.fromChainId, this.receiver, this.sendingId);

        let recieveButton: DomNode | undefined;

        this.empty().append(
            el("tr",
                el("td",
                    el(".chain-container",
                        this.fromImage = el("img", {
                            src: this.fromChainId === 1 ? "/images/shared/icn/icn-ethereum.svg" : "/images/shared/icn/icn-klaytn.svg",
                        }),
                        this.fromChainText = el("p", this.fromChainId === 1 ? "Ethereum" : "Klaytn"),
                    ),
                ),
                el("td",
                    el(".chain-container",
                        this.toImage = el("img", {
                            src: this.toChainId === 1 ? "/images/shared/icn/icn-ethereum.svg" : "/images/shared/icn/icn-klaytn.svg",
                        }),
                        this.toChainText = el("p", this.toChainId === 1 ? "Ethereum" : "Klaytn"),
                    ),
                ),
                el("td",
                    el("p", `${await this.getFormatting(sended)} APM`),
                ),
                el("td",
                    el("p", `${Number(await this.getFormatting(sended)) * 0.3 / 100} APM`),
                ),
                el("td",
                    received === true ? el("p", "Done") : recieveButton = el("button", "...", {
                        click: () => this.retry(),
                    }),
                ),
            ),
        );

        if (recieveButton !== undefined) {
            if (this.fromChainId === 1) {
                const interval = setInterval(async () => {
                    if (recieveButton?.deleted === true) {
                        clearInterval(interval);
                    } else {
                        const sendingBlock = await APMReservoirContract.sendingBlock(
                            this.sender,
                            this.toChainId,
                            this.receiver,
                            this.sendingId,
                        );
                        const currentBlock = await EthereumNetworkProvider.getBlockNumber();
                        const remainBlocks = currentBlock - sendingBlock.toNumber();
                        if (remainBlocks < 32) {
                            recieveButton?.empty().appendText(`${remainBlocks} / 32`);
                        } else {
                            recieveButton?.empty().appendText("Recieve");
                        }
                    }
                }, 1000);
            } else {
                recieveButton?.empty().appendText("Recieve");
            }
        }

        this.loadChain();
    }

    private async loadChain(): Promise<void> {
        if (this.fromChainId === 8217) {
            if (this.fromImage !== undefined) {
                this.fromImage.domElement.src = "/images/shared/icn/icn-klaytn.svg";
            }
            this.fromChainText?.empty().appendText("Klaytn");
        } else if (this.fromChainId === 1) {
            if (this.fromImage !== undefined) {
                this.fromImage.domElement.src = "/images/shared/icn/icn-ethereum.svg";
            }
            this.fromChainText?.empty().appendText("Ethereum");
        }

        if (this.toChainId === 8217) {
            if (this.toImage !== undefined) {
                this.toImage.domElement.src = "/images/shared/icn/icn-klaytn.svg";
            }
            this.toChainText?.empty().appendText("Klaytn");
        } else if (this.toChainId === 1) {
            if (this.toImage !== undefined) {
                this.toImage.domElement.src = "/images/shared/icn/icn-ethereum.svg";
            }
            this.toChainText?.empty().appendText("Ethereum");
        }
    }

    private async getFormatting(balance: BigNumber) {
        let balanceDisplay = utils.formatEther(balance!)
        balanceDisplay = (+balanceDisplay).toFixed(4);
        return balanceDisplay;
    }

    private receiveTokenHandler = async (receiver: string, fromChain: BigNumber, sender: string, sendId: BigNumber) => {
        if (receiver === this.receiver && fromChain.toNumber() === this.fromChainId && sender === this.sender && sendId.toNumber() === this.sendingId) {
            this.load();
        }
    }

    public delete() {
        this.toSender.off("ReceiveToken", this.receiveTokenHandler);
        super.delete();
    }
}
