"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const ethers_1 = require("ethers");
const skyutil_1 = __importDefault(require("skyutil"));
const superagent_1 = __importDefault(require("superagent"));
const APMCoinContract_1 = __importDefault(require("../contract/APMCoinContract"));
const APMReservoirContract_1 = __importDefault(require("../contract/APMReservoirContract"));
const KAPMContract_1 = __importDefault(require("../contract/KAPMContract"));
const KAPMReservoirContract_1 = __importDefault(require("../contract/KAPMReservoirContract"));
const EthereumWallet_1 = __importDefault(require("../ethereum/EthereumWallet"));
const KlaytnWallet_1 = __importDefault(require("../klaytn/KlaytnWallet"));
const Store_1 = __importDefault(require("../Store"));
const Form_1 = __importDefault(require("./Form"));
const Sended_1 = __importDefault(require("./Sended"));
class Swaper extends skynode_1.DomNode {
    constructor() {
        super(".swaper");
        this.chainIdsStore = new Store_1.default("swapper-chain-ids");
        this.loadHistoryNonce = 0;
        const savedFromChainId = this.chainIdsStore.get("from");
        const savedToChainId = this.chainIdsStore.get("to");
        this.append((0, skynode_1.el)("section.swap-container", (0, skynode_1.el)(".form-container", (this.fromForm = new Form_1.default(this, savedFromChainId === undefined ? 8217 : savedFromChainId, true)), (0, skynode_1.el)("a", {
            click: () => {
                const fromChainId = this.fromForm.chainId;
                this.fromForm.changeChain(this.toForm.chainId);
                this.toForm.changeChain(fromChainId);
                this.getApprove(fromChainId);
                this.loadHistory();
                this.chainIdsStore.set("from", this.fromForm.chainId);
                this.chainIdsStore.set("to", this.toForm.chainId);
            }
        }, (0, skynode_1.el)("img.arrow", { src: "/images/shared/icn/icn-arrow-right.svg", height: "50", alt: "icn-arrow-right" })), (this.toForm = new Form_1.default(this, savedToChainId === undefined ? 1 : savedToChainId))), (0, skynode_1.el)(".amount-container", (0, skynode_1.el)(".title-container", (0, skynode_1.el)(".title", "Amount"), this.balanceDisplay = (0, skynode_1.el)("p", "")), (0, skynode_1.el)(".input-container", (0, skynode_1.el)("a", "Max", {
            click: async () => {
                const owner = await this.fromForm.sender.loadAddress();
                let balance = await this.fromForm.sender.balanceOf(owner);
                if (this.fromForm.chainId !== 1) {
                    balance = balance.div(100).mul(97);
                }
                const value = ethers_1.utils.formatEther(balance);
                this.amountInput.domElement.value = value;
                this.feeDisplay.empty().appendText(this.numberWithCommas(`${Number(value) * 0.3 / 100}`, 6));
                this.receivedDisplay.empty().appendText(this.numberWithCommas(`${Number(value) - Number(value) * 0.3 / 100}`, 6));
            }
        }), this.amountInput = (0, skynode_1.el)("input", {
            change: () => {
                this.feeDisplay.empty().appendText(this.numberWithCommas(`${Number(this.amountInput.domElement.value) * 0.3 / 100}`, 6));
                this.receivedDisplay.empty().appendText(this.numberWithCommas(`${Number(this.amountInput.domElement.value) - Number(this.amountInput.domElement.value) * 0.3 / 100}`, 6));
            }
        }))), (0, skynode_1.el)(".fee-container", (0, skynode_1.el)(".text-container", (0, skynode_1.el)(".title", "Fees"), (0, skynode_1.el)(".caption", "0.3% (Charged by Gaia Protocol)")), (0, skynode_1.el)(".text-container", this.feeDisplay = (0, skynode_1.el)(".amount", this.numberWithCommas("0", 3)), (0, skynode_1.el)(".amount-caption", "APM"))), (0, skynode_1.el)(".received-container", (0, skynode_1.el)(".text-container", (0, skynode_1.el)(".title", "Estimated Received")), (0, skynode_1.el)(".text-container", this.receivedDisplay = (0, skynode_1.el)(".amount", this.numberWithCommas("0", 3)), (0, skynode_1.el)(".amount-caption", "APM"))), (0, skynode_1.el)(".warning-container", (0, skynode_1.el)(".content", (0, skynode_1.el)("img", { src: "/images/shared/icn/icn-warning.svg", alt: "icn-warning.svg" }), (0, skynode_1.el)("p", "브릿지 이용 시 양 체인에 가스비가 발생됩니다.\n보내는 체인이 이더리움일 경우 32컨펌 후 Claim 서명이 필요합니다"))), (0, skynode_1.el)(".button-container", (0, skynode_1.el)(".content", this.approveButton = (0, skynode_1.el)("button", "Approve\n토큰 사용 허가", {
            "disabled": "",
            click: async () => {
                const fromChainId = this.fromForm.chainId;
                if (fromChainId === 1) {
                    await APMCoinContract_1.default.approve(APMReservoirContract_1.default.address, ethers_1.constants.MaxUint256);
                }
                else if (fromChainId === 8217) {
                    await KAPMContract_1.default.approve(KAPMReservoirContract_1.default.address, ethers_1.constants.MaxUint256);
                }
                this.getApprove(fromChainId);
            }
        }), this.transferButton = (0, skynode_1.el)("button", "Transfer\n전송하기", {
            click: () => this.send(ethers_1.utils.parseEther(this.amountInput.domElement.value)),
        })))), (0, skynode_1.el)("section.history-container", (0, skynode_1.el)(".title", "전송 이력"), (0, skynode_1.el)("p", "트랜잭션이 한번 시작되면 되돌릴 수 없습니다.\nTransfer후 Claim 까지 완료되어야 체인 간 전송이 완료됩니다"), this.sendedList = (0, skynode_1.el)("table", (0, skynode_1.el)("thead", (0, skynode_1.el)("tr", (0, skynode_1.el)("td", "From Chain"), (0, skynode_1.el)("td", "To Chain"), (0, skynode_1.el)("td", "Amount"), (0, skynode_1.el)("td", "Fee"), (0, skynode_1.el)("td", "Status"))))));
        if (savedFromChainId !== undefined) {
            this.getApprove(savedFromChainId);
        }
        this.fromForm.on("changeChain", (chainId, originChainId) => {
            if (this.toForm.chainId === chainId) {
                this.toForm.changeChain(originChainId);
            }
            this.getApprove(chainId);
            this.loadHistory();
            this.chainIdsStore.set("from", this.fromForm.chainId);
            this.chainIdsStore.set("to", this.toForm.chainId);
        });
        this.toForm.on("changeChain", (chainId, originChainId) => {
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
    numberWithCommas(x, fixed = 3) {
        const parts = String(+(+x).toFixed(fixed)).split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
    }
    async getApprove(chainId) {
        if (chainId === 1) {
            const owner = await EthereumWallet_1.default.loadAddress();
            if (owner !== undefined) {
                if ((await APMCoinContract_1.default.allowance(owner, APMReservoirContract_1.default.address)).lt(1)) {
                    this.approveButton.domElement.disabled = false;
                    this.transferButton.domElement.disabled = true;
                }
                else {
                    this.approveButton.domElement.disabled = true;
                    this.transferButton.domElement.disabled = false;
                }
            }
        }
        else if (chainId === 8217) {
            const owner = await KlaytnWallet_1.default.loadAddress();
            if (owner !== undefined) {
                if ((await KAPMContract_1.default.allowance(owner, KAPMReservoirContract_1.default.address)).lt(1)) {
                    this.approveButton.domElement.disabled = false;
                    this.transferButton.domElement.disabled = true;
                }
                else {
                    this.approveButton.domElement.disabled = true;
                    this.transferButton.domElement.disabled = false;
                }
            }
        }
    }
    async loadHistory() {
        const owner = await this.fromForm.sender.loadAddress();
        const balance = await this.fromForm.sender.balanceOf(owner);
        this.balanceDisplay
            .empty()
            .appendText(`${ethers_1.utils.formatUnits(balance)} APM`);
        this.sendedList.empty();
        if (this.fromForm.sender !== undefined &&
            this.toForm.sender !== undefined) {
            const sender = await this.fromForm.sender.loadAddress();
            const receiver = await this.toForm.sender.loadAddress();
            if (sender !== undefined && receiver !== undefined) {
                const count = await this.fromForm.sender.sendingCounts(sender, this.toForm.chainId, receiver);
                this.loadHistoryNonce += 1;
                const nonce = this.loadHistoryNonce;
                skyutil_1.default.repeatResultAsync(count.toNumber(), async (sendingId) => {
                    if (this.loadHistoryNonce === nonce) {
                        this.addSended(sender, receiver, ethers_1.BigNumber.from(sendingId));
                    }
                });
            }
        }
    }
    addSended(sender, receiver, sendingId) {
        if (this.fromForm.sender !== undefined &&
            this.toForm.sender !== undefined) {
            new Sended_1.default(this.fromForm.sender, this.toForm.sender, this.fromForm.chainId, this.toForm.chainId, sender, receiver, sendingId.toNumber(), async () => {
                if (this.fromForm.sender !== undefined) {
                    const sendingData = await this.fromForm.sender.sendingData(sender, this.toForm.chainId, receiver, sendingId);
                    await this.receive(sender, this.toForm.chainId, receiver, sendingId, sendingData.amount);
                    this.loadHistory();
                }
            }).appendTo(this.sendedList, 0);
        }
    }
    async send(amount) {
        if (this.fromForm.sender !== undefined &&
            this.toForm.sender !== undefined) {
            const receiver = await this.toForm.sender.loadAddress();
            if (receiver !== undefined) {
                await this.fromForm.sender.sendToken(this.toForm.chainId, receiver, amount, ethers_1.utils.defaultAbiCoder.encode(["address"], [ethers_1.constants.AddressZero]));
            }
        }
    }
    async receive(sender, toChainId, _receiver, sendingId, amount) {
        if (this.fromForm.sender !== undefined &&
            this.toForm.sender !== undefined &&
            this.toForm.chainId.toString() === toChainId.toString()) {
            const receiver = await this.toForm.sender.loadAddress();
            if (receiver === _receiver) {
                try {
                    const result1 = await superagent_1.default.get(`https://apm-test-api.gaiabridge.com/sign?receiver=${receiver}&fromChainId=${this.fromForm.chainId}&toChainId=${this.toForm.chainId}&sender=${sender}&sendingId=${sendingId}&amount=${amount.toString()}`).send();
                    const result2 = await superagent_1.default.get(`https://apm-test-api.gaiabridge.com/sign2ForTest?receiver=${receiver}&fromChainId=${this.fromForm.chainId}&toChainId=${this.toForm.chainId}&sender=${sender}&sendingId=${sendingId}&amount=${amount.toString()}`).send();
                    if (result1.body.confirming === true ||
                        result2.body.confirming === true) {
                        alert("이더리움 Block Confirm을 기다리는 중입니다.");
                    }
                    else {
                        let isFeePayed = this.fromForm.chainId === 8217;
                        const vs = [];
                        const rs = [];
                        const ss = [];
                        const sig1 = ethers_1.utils.splitSignature(result1.body.signedMessage);
                        const sig2 = ethers_1.utils.splitSignature(result2.body.signedMessage);
                        vs.push(sig1.v);
                        rs.push(sig1.r);
                        ss.push(sig1.s);
                        vs.push(sig2.v);
                        rs.push(sig2.r);
                        ss.push(sig2.s);
                        await this.toForm.sender.receiveToken(sender, this.fromForm.chainId, receiver, amount, sendingId, isFeePayed, 30, 0, ethers_1.utils.defaultAbiCoder.encode(["address"], [ethers_1.constants.AddressZero]), vs, rs, ss);
                    }
                }
                catch (error) {
                    alert(`Error: ${error.message}`);
                }
            }
        }
    }
}
exports.default = Swaper;
//# sourceMappingURL=Swaper.js.map