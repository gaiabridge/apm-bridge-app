import { DomNode, el } from "@hanul/skynode";
import { BigNumber, BigNumberish, utils } from "ethers";
import SkyUtil from "skyutil";
import superagent from "superagent";
import APMCoinContract from "../contract/APMCoinContract";
import APMReservoirContract from "../contract/APMReservoirContract";
import EthereumWallet from "../ethereum/EthereumWallet";
import ConfirmingPopup from "./ConfirmingPopup";
import Form from "./Form";
import Sended from "./Sended";

export default class Swaper extends DomNode {
    private fromForm: Form;
    private toForm: Form;
    private amountInput: DomNode<HTMLInputElement>;

    private sendedList: DomNode;
    private feeDisplay: DomNode;
    private receivedDisplay: DomNode;

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
                        this.amountInput = el("input", {
                            change: () => {
                                this.feeDisplay.empty().appendText(this.numberWithCommas(`${Number(this.amountInput.domElement.value) * 0.3 / 100}`));
                                this.receivedDisplay.empty().appendText(this.numberWithCommas(`${Number(this.amountInput.domElement.value) - Number(this.amountInput.domElement.value) * 0.3 / 100}`));
                            }
                        }),
                    ),
                ),
                el(".fee-container",
                    el(".text-container",
                        el(".title", "Fees"),
                        el(".caption", "0.3% (Charged by Gaia Protocol)"),
                    ),
                    el(".text-container",
                        this.feeDisplay = el(".amount", this.numberWithCommas("0", 3)),
                        el(".amount-caption", "APM"),
                    ),
                ),
                el(".received-container",
                    el(".text-container",
                        el(".title", "Estimated Received"),
                    ),
                    el(".text-container",
                        this.receivedDisplay = el(".amount", this.numberWithCommas("0", 3)),
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
                        el("button", "Approve", {
                            "disabled": "",
                            click: async () => {
                            }
                        }),
                        el("button", "Transfer", {
                            click: () => this.send(
                                utils.parseEther(this.amountInput.domElement.value)
                            ),
                        }),
                    ),
                ),
            ),
            el("section.history-container",
                el(".title", "The historical records"),
                el("p", "Once the transfer has started, Can’t cancel. Please ‘Retry’ if any transfers are missing."),
                this.sendedList = el("table",
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
                ),
            ),
        );

        this.fromForm.on("changeChain", (chainId: number, originChainId: number) => {
            if (this.toForm.chainId === chainId) {
                this.toForm.changeChain(originChainId);
            }
            this.loadHistory();
        });

        this.toForm.on("changeChain", (chainId: number, originChainId: number) => {
            if (this.fromForm.chainId === chainId) {
                this.fromForm.changeChain(originChainId);
            }
            this.loadHistory();
        });

        this.loadHistory();
        this.fromForm.on("connect", () => this.loadHistory());
        this.toForm.on("connect", () => this.loadHistory());
    }

    private loadHistoryNonce = 0;

    numberWithCommas(x: string, fixed = 3) {
        const parts = String(+(+x).toFixed(fixed)).split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
    }

    private async loadHistory() {
        if (
            this.fromForm.sender !== undefined &&
            this.toForm.sender !== undefined
        ) {
            const sender = await this.fromForm.sender.loadAddress();
            const receiver = await this.toForm.sender.loadAddress();
            if (sender !== undefined && receiver !== undefined) {
                const count = await this.fromForm.sender.sendingCounts(
                    sender,
                    this.toForm.chainId,
                    receiver,
                );
                this.loadHistoryNonce += 1;
                const nonce = this.loadHistoryNonce;

                SkyUtil.repeatResultAsync(count.toNumber(), async (sendingId) => {
                    if (this.loadHistoryNonce === nonce) {
                        this.addSended(sender, receiver, BigNumber.from(sendingId));
                    }
                });
            }
        }
    }

    public addSended(sender: string, receiver: string, sendingId: BigNumber) {
        if (
            this.fromForm.sender !== undefined &&
            this.toForm.sender !== undefined
        ) {
            new Sended(
                this.fromForm.sender,
                this.toForm.sender,
                this.fromForm.chainId,
                this.toForm.chainId,
                sender,
                receiver,
                sendingId.toNumber(),
                async () => {
                    if (this.fromForm.sender !== undefined) {
                        const sended = await this.fromForm.sender.sendedAmounts(
                            sender,
                            this.toForm.chainId,
                            receiver,
                            sendingId,
                        );
                        this.receive(
                            sender,
                            this.toForm.chainId,
                            receiver,
                            sendingId,
                            sended,
                        );
                    }
                }
            ).appendTo(this.sendedList, 0);
        }
    }

    public async send(amount: BigNumberish) {
        if (
            this.fromForm.sender !== undefined &&
            this.toForm.sender !== undefined
        ) {
            const receiver = await this.toForm.sender.loadAddress();
            if (receiver !== undefined) {
                await this.fromForm.sender.sendToken(
                    this.toForm.chainId,
                    receiver,
                    amount
                );
            }
        }
    }

    public async receive(
        sender: string,
        toChainId: BigNumberish,
        _receiver: string,
        sendingId: BigNumber,
        amount: BigNumberish
    ) {
        if (
            this.fromForm.sender !== undefined &&
            this.toForm.sender !== undefined &&
            this.toForm.chainId.toString() === toChainId.toString()
        ) {
            const receiver = await this.toForm.sender.loadAddress();
            if (receiver === _receiver) {
                try {

                    const uri = `sign?receiver=${receiver}&fromChainId=${this.fromForm.chainId
                        }&toChainId=${this.toForm.chainId
                        }&sender=${sender}&sendingId=${sendingId}&amount=${amount.toString()}`;

                    const result1 = await superagent.get(`https://apm-test-api.gaiabridge.com/${uri}`).send();
                    const result2 = await superagent.get(`https://apm-test-api.gaiabridge.com/${uri}`).send();
                    const result3 = await superagent.get(`https://apm-test-api.gaiabridge.com/${uri}`).send();

                    if (
                        result1.body.confirming === true ||
                        result2.body.confirming === true ||
                        result3.body.confirming === true
                    ) {
                        new ConfirmingPopup(() => {
                            this.receive(
                                sender,
                                toChainId,
                                _receiver,
                                sendingId,
                                amount
                            );
                        });
                    }

                    else {

                        let isFeePayed = this.fromForm.chainId === 8172;

                        const vs: number[] = [];
                        const rs: string[] = [];
                        const ss: string[] = [];

                        const sig1 = utils.splitSignature(result1.body.signedMessage);
                        const sig2 = utils.splitSignature(result2.body.signedMessage);
                        const sig3 = utils.splitSignature(result3.body.signedMessage);

                        vs.push(sig1.v); rs.push(sig1.r); ss.push(sig1.s);
                        vs.push(sig2.v); rs.push(sig2.r); ss.push(sig2.s);
                        vs.push(sig3.v); rs.push(sig3.r); ss.push(sig3.s);

                        await this.toForm.sender.receiveToken(
                            sender,
                            this.fromForm.chainId,
                            receiver,
                            amount,
                            sendingId,
                            isFeePayed,
                            vs, rs, ss,
                        );
                    }
                } catch (error: any) {
                    alert(`Error: ${error.message}`);
                }
            }
        }
    }
}
