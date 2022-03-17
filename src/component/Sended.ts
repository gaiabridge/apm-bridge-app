import { DomNode, el } from "@hanul/skynode";
import { BigNumber, utils } from "ethers";
import GaiaBridgeInterface from "../contract/GaiaBridgeInterface";

export default class Sended extends DomNode {
    private fromImage: DomNode<HTMLImageElement>;
    private toImage: DomNode<HTMLImageElement>;

    private fromChainText: DomNode;
    private toChainText: DomNode<HTMLImageElement>;

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

        this.empty().append(
            el("tr",
                el("td",
                    el(".chain-container",
                        this.fromImage = el("img", { src: "/images/shared/icn/icn-ethereum.svg", alt: "icn-ethereum" }),
                        this.fromChainText = el("p", `${console.log(this.fromSender)}`),
                    ),

                ),
                el("td",
                    el(".chain-container",
                        this.toImage = el("img", { src: "/images/shared/icn/icn-klaytn.svg", alt: "icn-klaytn" }),
                        this.toChainText = el("p", "Klaytn"),
                    ),
                ),
                el("td",
                    el("p", `${await this.getFormatting(sended)} APM`),
                ),
                el("td",
                    el("p", `${Number(await this.getFormatting(sended)) * 0.3 / 100} APM`),
                ),
                el("td",
                    el("p", "00:00"),
                ),
                el("td",
                    received === true ? el("button", "Done") : el("button", "Retry", {
                        click: () => this.retry(),
                    }),
                ),
            ),
        );
        this.loadChain();
    }

    private async loadChain(): Promise<void> {
        if (this.fromChainId === 8217) {
            this.fromImage.domElement.src = "/images/shared/icn/icn-klaytn.svg";
            this.fromChainText.empty().appendText("Klaytn");
        } else if (this.fromChainId === 1) {
            this.fromImage.domElement.src = "/images/shared/icn/icn-ethereum.svg";
            this.fromChainText.empty().appendText("Ethereum");
        }

        if (this.toChainId === 8217) {
            this.toImage.domElement.src = "/images/shared/icn/icn-klaytn.svg";
            this.toChainText.empty().appendText("Klaytn");
        } else if (this.toChainId === 1) {
            this.toImage.domElement.src = "/images/shared/icn/icn-ethereum.svg";
            this.toChainText.empty().appendText("Ethereum");
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
