import { DomNode, el } from "@hanul/skynode";
import { BigNumber, BigNumberish, constants, utils } from "ethers";
import SkyUtil from "skyutil";
import superagent from "superagent";
import Config from "../Config";
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
                            this.getApprove(this.fromForm.chainId);

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
                                let balance = await this.fromForm.sender!.balanceOf(owner!);

                                if (this.fromForm.chainId !== 1) {
                                    balance = balance.mul(1000).div(1003);
                                }

                                const value = utils.formatEther(balance);
                                console.log(Number(value) + Number(value) * 0.3 / 100);
                                this.amountInput.domElement.value = value;

                                this.feeDisplay.empty().appendText(this.numberWithCommas(`${Number(value) * 0.3 / 100}`, 6));
                                this.receivedDisplay.empty().appendText(this.numberWithCommas(`${Number(value) - Number(value) * 0.3 / 100}`, 6));
                            }
                        }),
                        this.amountInput = el("input", {
                            change: () => {
                                const value = this.amountInput.domElement.value;

                                this.feeDisplay.empty().appendText(this.numberWithCommas(`${Number(value) * 0.3 / 100}`, 6));
                                this.receivedDisplay.empty().appendText(this.numberWithCommas(`${Number(value) - Number(value) * 0.3 / 100}`, 6));
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

        this.fromForm.on("approved", () => this.getApprove(this.fromForm.chainId));
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

    private loadHistoryIndex = 0;

    private async loadHistory() {

        const currentIndex = this.loadHistoryIndex + 1;
        this.loadHistoryIndex += 1;

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
                    if (this.loadHistoryNonce === nonce && currentIndex === this.loadHistoryIndex) {
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
                        const sendingData = await this.fromForm.sender.sendingData(
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
                            sendingData.amount,
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
                    amount,
                    utils.defaultAbiCoder.encode(["address"], [constants.AddressZero]),
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

                    const isFeePayed = this.fromForm.chainId === 8217;
                    const protocolFee = 30;
                    const senderDiscountRate = Config.discountUsers.includes(sender) === true ? 5000 : 0;

                    const vs: number[] = [];
                    const rs: string[] = [];
                    const ss: string[] = [];

                    for (const host of Config.oracleHosts) {

                        const params = new URLSearchParams();
                        params.set("receiver", receiver);
                        params.set("fromChainId", String(this.fromForm.chainId));
                        params.set("toChainId", String(this.toForm.chainId));
                        params.set("sender", sender);
                        params.set("sendingId", String(sendingId));
                        params.set("amount", amount.toString());
                        params.set("protocolFee", String(protocolFee));
                        params.set("senderDiscountRate", String(senderDiscountRate));

                        const result = await superagent.get(`https://${host}/sign?${params.toString()}`).send();

                        if (result.body.confirming === true) {
                            alert("이더리움 Block Confirm을 기다리는 중입니다.");
                            return;
                        }

                        const sig = utils.splitSignature(result.body.signedMessage);

                        vs.push(sig.v);
                        rs.push(sig.r);
                        ss.push(sig.s);
                    }

                    await this.toForm.sender.receiveToken(
                        sender,
                        this.fromForm.chainId,
                        receiver,
                        amount,
                        sendingId,
                        isFeePayed,
                        protocolFee,
                        senderDiscountRate,
                        utils.defaultAbiCoder.encode(["address"], [constants.AddressZero]),
                        vs,
                        rs,
                        ss,
                    );
                } catch (error: any) {
                    alert(`Error: ${error.message}`);
                }
            }
        }
    }
}
