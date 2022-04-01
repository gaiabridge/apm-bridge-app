import { DomNode, el } from "@hanul/skynode";
import { BigNumber, BigNumberish, constants, utils } from "ethers";
import SkyUtil from "skyutil";
import superagent from "superagent";
import APMCoinContract from "../contract/APMCoinContract";
import APMReservoirContract from "../contract/APMReservoirContract";
import KAPMContract from "../contract/KAPMContract";
import KAPMReservoirContract from "../contract/KAPMReservoirContract";
import EthereumWallet from "../ethereum/EthereumWallet";
import KlaytnWallet from "../klaytn/KlaytnWallet";
import Store from "../Store";
import Form from "./Form";
import Sended from "./Sended";

export default class Swaper extends DomNode {

    private fromForm: Form;
    private toForm: Form;
    private amountInput: DomNode<HTMLInputElement>;

    private sendedList: DomNode;
    private feeDisplay: DomNode;
    private receivedDisplay: DomNode;
    private balanceDisplay: DomNode;

    private approveButton: DomNode<HTMLButtonElement>;
    private transferButton: DomNode<HTMLButtonElement>;

    private chainIdsStore: Store = new Store("swapper-chain-ids");

    constructor() {
        super(".swaper");

        const savedFromChainId = this.chainIdsStore.get<number>("from");
        const savedToChainId = this.chainIdsStore.get<number>("to");

        this.append(
            el("section.swap-container",
                el(".form-container",
                    (this.fromForm = new Form(this, savedFromChainId === undefined ? 8217 : savedFromChainId, true)),
                    el("a", {
                        click: () => {
                            const fromChainId = this.fromForm.chainId;
                            this.fromForm.changeChain(this.toForm.chainId);
                            this.toForm.changeChain(fromChainId);
                            this.getApprove(fromChainId);

                            this.loadHistory();

                            this.chainIdsStore.set("from", this.fromForm.chainId);
                            this.chainIdsStore.set("to", this.toForm.chainId);
                        }
                    },
                        el("img.arrow", { src: "/images/shared/icn/icn-arrow-right.svg", height: "50", alt: "icn-arrow-right" })
                    ),
                    (this.toForm = new Form(this, savedToChainId === undefined ? 1 : savedToChainId)),
                ),
                el(".amount-container",
                    el(".title-container",
                        el(".title", "Amount"),
                        this.balanceDisplay = el("p", ""),
                    ),
                    el(".input-container",
                        el("a", "Max", {
                            click: async () => {
                                const owner = await this.fromForm.sender!.loadAddress();
                                const balance = await this.fromForm.sender!.balanceOf(owner!);

                                this.amountInput.domElement.value = utils.formatEther(balance);
                            }
                        }),
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
                        el("p", "브릿지 이용 시 양 체인에 가스비가 발생됩니다.\n보내는 체인이 이더리움일 경우 32컨펌 후 Claim 서명이 필요합니다"),
                    ),
                ),
                el(".button-container",
                    el(".content",
                        this.approveButton = el("button", "Approve\n토큰 사용 허가", {
                            "disabled": "",
                            click: async () => {
                                const fromChainId = this.fromForm.chainId;
                                if (fromChainId === 1) {
                                    await APMCoinContract.approve(APMReservoirContract.address, constants.MaxUint256);
                                } else if (fromChainId === 8217) {
                                    await KAPMContract.approve(KAPMReservoirContract.address, constants.MaxUint256);
                                }
                                this.getApprove(fromChainId);
                            }
                        }),
                        this.transferButton = el("button", "Transfer\n전송하기", {
                            click: () => this.send(
                                utils.parseEther(this.amountInput.domElement.value)
                            ),
                        }),
                    ),
                ),
            ),
            el("section.history-container",
                el(".title", "전송 이력"),
                el("p", "트랜잭션이 한번 시작되면 되돌릴 수 없습니다.\nTransfer후 Claim 까지 완료되어야 체인 간 전송이 완료됩니다"),
                this.sendedList = el("table",
                    el("thead",
                        el("tr",
                            el("td", "From Chain"),
                            el("td", "To Chain"),
                            el("td", "Amount"),
                            el("td", "Fee"),
                            el("td", "Status"),
                        ),
                    ),
                ),
            ),
        );

        if (savedFromChainId !== undefined) {
            this.getApprove(savedFromChainId);
        }

        this.fromForm.on("changeChain", (chainId: number, originChainId: number) => {
            if (this.toForm.chainId === chainId) {
                this.toForm.changeChain(originChainId);
            }

            this.getApprove(chainId);
            this.loadHistory();

            this.chainIdsStore.set("from", this.fromForm.chainId);
            this.chainIdsStore.set("to", this.toForm.chainId);
        });

        this.toForm.on("changeChain", (chainId: number, originChainId: number) => {
            if (this.fromForm.chainId === chainId) {
                this.fromForm.changeChain(originChainId);
            }
            this.loadHistory();

            this.chainIdsStore.set("from", this.fromForm.chainId);
            this.chainIdsStore.set("to", this.toForm.chainId);
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

    private async getApprove(chainId: number) {
        if (chainId === 1) {
            const owner = await EthereumWallet.loadAddress();
            if (owner !== undefined) {
                if ((await APMCoinContract.allowance(owner, APMReservoirContract.address)).lt(1)) {
                    this.approveButton.domElement.disabled = false;
                    this.transferButton.domElement.disabled = true;
                } else {
                    this.approveButton.domElement.disabled = true;
                    this.transferButton.domElement.disabled = false;
                }
            }
        } else if (chainId === 8217) {
            const owner = await KlaytnWallet.loadAddress();
            if (owner !== undefined) {
                if ((await KAPMContract.allowance(owner, KAPMReservoirContract.address)).lt(1)) {
                    this.approveButton.domElement.disabled = false;
                    this.transferButton.domElement.disabled = true;
                } else {
                    this.approveButton.domElement.disabled = true;
                    this.transferButton.domElement.disabled = false;
                }
            }
        }
    }

    private async loadHistory() {

        const owner = await this.fromForm.sender!.loadAddress();
        const balance = await this.fromForm.sender!.balanceOf(owner!);
        this.balanceDisplay
            .empty()
            .appendText(`${utils.formatUnits(balance)} APM`);

        this.sendedList.empty();

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
                        await this.receive(
                            sender,
                            this.toForm.chainId,
                            receiver,
                            sendingId,
                            sended,
                        );
                        this.loadHistory();
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
                        alert("이더리움 Block Confirm을 기다리는 중입니다.");
                    }

                    else {

                        let isFeePayed = this.fromForm.chainId === 8217;

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
