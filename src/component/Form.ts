import { DomNode, el } from "@hanul/skynode";
import { BigNumber, utils } from "ethers";
import APMReservoirContract from "../contract/APMReservoirContract";
import GaiaBridgeInterface from "../contract/GaiaBridgeInterface";
import KAPMContract from "../contract/KAPMContract";
import Swaper from "./Swaper";

export default class Form extends DomNode {
    public sender: GaiaBridgeInterface | undefined;

    private chainIcon: DomNode<HTMLImageElement>;
    private chainSelect: DomNode<HTMLSelectElement>;
    private balanceDisplay: DomNode;
    private inputContainer: DomNode;
    private buttonContainer: DomNode;

    constructor(
        private swaper: Swaper,
        public chainId: number,
        private isFrom: boolean = false
    ) {
        super("form")
        this.append(
            this.chainIcon = el("img", { src: "/images/shared/icn/icn-klaytn.svg", alt: "chain image" }),
            el("p", "FROM"),
            this.chainSelect = el("select",
                el("option", "Klaytn", { value: "8217" }),
                el("option", "Ethereum", { value: "1" }),
                {
                    change: () => {
                        const originChainId = this.chainId;
                        this.changeChain(parseInt(this.chainSelect.domElement.value, 10));
                        this.fireEvent("changeChain", this.chainId, originChainId);
                    },
                }
            ),
            isFrom ? el("span.help-text", "에서") : el("span.help-text", "으로"),
            (this.balanceDisplay = el(".balance")),
            (this.inputContainer = el(".input-container")),
            (this.buttonContainer = el(".button-container")),
        );
        this.changeChain(chainId);
    }

    public async changeChain(chainId: number) {
        this.chainId = chainId;
        this.chainSelect.domElement.value = String(chainId);

        this.sender?.off("connect", this.connectHandler);
        this.sender?.off("Transfer", this.transferHandler);
        this.sender?.off("SendToken", this.sendHandler);

        if (chainId === 8217) {
            this.sender = KAPMContract;
            this.chainIcon.domElement.src = "/images/shared/icn/icn-klaytn.svg";
        } else if (chainId === 1) {
            this.sender = APMReservoirContract;
            this.chainIcon.domElement.src = "/images/shared/icn/icn-ethereum.svg";
        }
        await this.loadBalance();

        this.sender?.on("connect", this.connectHandler);
        this.sender?.on("Transfer", this.transferHandler);
        this.sender?.on("SendToken", this.sendHandler);
    }

    private async loadBalance() {
        this.inputContainer.empty();
        this.buttonContainer.empty();

        if (this.sender !== undefined) {
            const owner = await this.sender.loadAddress();
            if (owner !== undefined) {
                const balance = await this.sender.balanceOf(owner);
                this.balanceDisplay
                    .empty()
                    .appendText(`${utils.formatUnits(balance)} PAX`);

                this.buttonContainer.append(
                    el("a.add-token-to-wallet-button", "지갑에 토큰 추가하기", {
                        click: () => {
                            this.sender?.addTokenToWallet();
                        },
                    }),
                );

                if (this.isFrom === true) {
                    const input: DomNode<HTMLInputElement> = el("input", {
                        placeholder: "보낼 수량",
                    });
                    input.appendTo(this.inputContainer);

                    this.buttonContainer.append(
                        el("a.send-button", "보내기", {
                            click: () => this.swaper.send(
                                utils.parseEther(input.domElement.value)
                            ),
                        })
                    );
                }
            } else {
                this.balanceDisplay.empty().appendText("잔액 불러오기 실패");
                this.buttonContainer.append(
                    el("a.connect-button", "지갑 연결", {
                        click: () => this.sender?.connect(),
                    }),
                );
            }
        }
    }

    private connectHandler = async () => {
        this.fireEvent("connect");
        this.loadBalance();
    };

    private transferHandler = async (from: string, to: string) => {
        const owner = await this.sender?.loadAddress();
        if (from === owner || to === owner) {
            this.loadBalance();
        }
    };

    private sendHandler = async (
        sender: string,
        toChainId: BigNumber,
        receiver: string,
        sendingId: BigNumber,
        amount: BigNumber
    ) => {
        this.swaper.receive(sender, toChainId, receiver, sendingId, amount);
        const owner = await this.sender?.loadAddress();
        if (sender === owner) {
            this.swaper.addSended(sender, receiver, sendingId);
        }
    };

    public delete() {
        this.sender?.off("connect", this.connectHandler);
        this.sender?.off("Transfer", this.transferHandler);
        this.sender?.off("SendToken", this.sendHandler);
        super.delete();
    }
}