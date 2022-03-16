import { DomNode, el } from "@hanul/skynode";
import Form from "./Form";

export default class Swaper extends DomNode {
    private fromForm: Form;
    private toForm: Form;
    private amountInput: DomNode;

    private sendedList: DomNode;
    private feeDisplay: DomNode;

    constructor() {
        super(".swaper");

        this.append(
            el("section.swap-container",
                el(".form-container",
                    (this.fromForm = new Form(this, 8217, true)),
                    el("img.arrow", { src: "/images/shared/icn/icn-arrow-right.svg", height: "50", alt: "icn-arrow-right" }),
                    (this.toForm = new Form(this, 1))
                ),
                el(".amount-container",
                    el(".title", "Amount"),
                    el(".input-container",
                        this.amountInput = el("input"),
                    ),
                ),
                el(".fee-container",
                    el(".text-container",
                        el(".title", "Fees"),
                        el(".caption", "0.3% (Charged by Gaia Protocol)"),
                    ),
                    el(".text-container",
                        this.feeDisplay = el(".amount", this.numberWithCommas("30")),
                        el(".amount-caption", "APM"),
                    ),
                ),
                el(".received-container",
                    el(".text-container",
                        el(".title", "Estimated Received"),
                    ),
                    el(".text-container",
                        this.feeDisplay = el(".amount", this.numberWithCommas("9999999", 3)),
                        el(".amount-caption", "APM"),
                    )
                ),
                el(".warning-container",
                    el(".content",
                        el("img", { src: "/images/shared/icn/icn-warning.svg", alt: "icn-warning.svg" }),
                        el("p", "Gas costs are required for both chains to use the bridge."),
                    ),
                ),
                el(".button-container",
                    el(".content",
                        el("button.disable-button", "Approve"),
                        el("button", "Transfer"),
                    ),
                ),
            ),
            el("section.history-container",
                el(".title", "The historical records"),
                el("p", "Once the transfer has started, Can’t cancel. Please ‘Retry’ if any transfers are missing."),
                el("table",
                    el("thead",
                        el("tr",
                            el("td", "From Chain"),
                            el("td", "To Chain"),
                            el("td", "Amount"),
                            el("td", "Fee"),
                            el("td", "Time"),
                            el("td", "Status"),
                        ),
                    ),
                    el("tbody",
                        el("tr",
                            el("td",
                                el(".chain-container",
                                    el("img", { src: "/images/shared/icn/icn-klaytn.svg", alt: "icn-klaytn" }),
                                    el("p", "Klaytn"),
                                ),
                            ),
                            el("td",
                                el(".chain-container",
                                    el("img", { src: "/images/shared/icn/icn-ethereum.svg", alt: "icn-ethereum" }),
                                    el("p", "Ethereum"),
                                ),
                            ),
                            el("td",
                                el("p", "30 APM"),
                            ),
                            el("td",
                                el("p", "3 APM"),
                            ),
                            el("td",
                                el("p", "2021-12-14 17:00:00"),
                            ),
                            el("td",
                                el(".status-container",
                                    el("a", "Etherscan"),
                                    el("a", "Klaytnscope"),
                                ),
                            ),
                        ),
                        el("tr",
                            el("td",
                                el(".chain-container",
                                    el("img", { src: "/images/shared/icn/icn-ethereum.svg", alt: "icn-ethereum" }),
                                    el("p", "Ethereum"),
                                ),

                            ),
                            el("td",
                                el(".chain-container",
                                    el("img", { src: "/images/shared/icn/icn-klaytn.svg", alt: "icn-klaytn" }),
                                    el("p", "Klaytn"),
                                ),
                            ),
                            el("td",
                                el("p", "30 APM"),
                            ),
                            el("td",
                                el("p", "3 APM"),
                            ),
                            el("td",
                                el("p", "2021-12-14 17:00:00"),
                            ),
                            el("td",
                                el("button", "Retry"),
                            ),
                        ),
                    ),
                ),
            ),
        );

        // this.fromForm.on(
        //     "changeChain",
        //     (chainId: number, originChainId: number) => {
        //         if (this.toForm.chainId === chainId) {
        //             this.toForm.changeChain(originChainId);
        //         }
        //         this.loadHistory();
        //     }
        // );

        // this.toForm.on("changeChain", (chainId: number, originChainId: number) => {
        //     if (this.fromForm.chainId === chainId) {
        //         this.fromForm.changeChain(originChainId);
        //     }
        //     this.loadHistory();
        // });

        // this.loadHistory();
        // this.fromForm.on("connect", () => this.loadHistory());
        // this.toForm.on("connect", () => this.loadHistory());
    }

    private loadHistoryNonce = 0;

    numberWithCommas(x: string, fixed = 3) {
        const parts = String(+(+x).toFixed(fixed)).split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
    }

    // private async loadHistory() {
    //     if (
    //         this.fromForm.sender !== undefined &&
    //         this.toForm.sender !== undefined
    //     ) {
    //         const sender = await this.fromForm.sender.loadAddress();
    //         const receiver = await this.toForm.sender.loadAddress();
    //         if (sender !== undefined && receiver !== undefined) {
    //             const count = await this.fromForm.sender.sendCount(
    //                 sender,
    //                 this.toForm.chainId,
    //                 receiver
    //             );
    //             this.loadHistoryNonce += 1;
    //             const nonce = this.loadHistoryNonce;
    //             this.sendedList.empty();

    //             SkyUtil.repeatResultAsync(count.toNumber(), async (sendId) => {
    //                 if (this.loadHistoryNonce === nonce) {
    //                     this.addSended(sender, receiver, BigNumber.from(sendId));
    //                 }
    //             });
    //         }
    //     }
    // }

    // public addSended(sender: string, receiver: string, sendId: BigNumber) {
    //     if (
    //         this.fromForm.sender !== undefined &&
    //         this.toForm.sender !== undefined
    //     ) {
    //         new Sended(
    //             this.fromForm.sender,
    //             this.toForm.sender,
    //             this.fromForm.chainId,
    //             this.toForm.chainId,
    //             sender,
    //             receiver,
    //             sendId.toNumber(),
    //             async () => {
    //                 if (this.fromForm.sender !== undefined) {
    //                     const sended = await this.fromForm.sender.sended(
    //                         sender,
    //                         this.toForm.chainId,
    //                         receiver,
    //                         sendId
    //                     );
    //                     this.receiveOverHorizon(
    //                         receiver,
    //                         this.toForm.chainId,
    //                         sender,
    //                         sendId,
    //                         sended
    //                     );
    //                 }
    //             }
    //         ).appendTo(this.sendedList, 0);
    //     }
    // }

    // public async sendOverHorizon(amount: BigNumberish) {
    //     if (
    //         this.fromForm.sender !== undefined &&
    //         this.toForm.sender !== undefined
    //     ) {
    //         const receiver = await this.toForm.sender.loadAddress();
    //         if (receiver !== undefined) {
    //             await this.fromForm.sender.sendOverHorizon(
    //                 this.toForm.chainId,
    //                 receiver,
    //                 amount
    //             );
    //         }
    //     }
    // }

    // public async receiveOverHorizon(
    //     _receiver: string,
    //     toChain: BigNumberish,
    //     sender: string,
    //     sendId: BigNumber,
    //     amount: BigNumberish
    // ) {
    //     if (
    //         this.fromForm.sender !== undefined &&
    //         this.toForm.sender !== undefined &&
    //         this.toForm.chainId.toString() === toChain.toString()
    //     ) {
    //         const receiver = await this.toForm.sender.loadAddress();
    //         if (receiver === _receiver) {
    //             try {
    //                 const result = await superagent
    //                     .get(
    //                         `https://api.chainhorizon.org/mix/signsend?receiver=${receiver}&fromChain=${this.fromForm.chainId
    //                         }&toChain=${this.toForm.chainId
    //                         }&sender=${sender}&sendId=${sendId}&amount=${amount.toString()}`
    //                     )
    //                     .send();
    //                 await this.toForm.sender.receiveOverHorizon(
    //                     this.fromForm.chainId,
    //                     this.toForm.chainId,
    //                     sender,
    //                     sendId,
    //                     amount,
    //                     result.text
    //                 );
    //             } catch (error: any) {
    //                 alert(`Error: ${error.message}`);
    //             }
    //         }
    //     }
    // }
}
