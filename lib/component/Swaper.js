"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const ethers_1 = require("ethers");
const skyutil_1 = __importDefault(require("skyutil"));
const superagent_1 = __importDefault(require("superagent"));
const ConfirmingPopup_1 = __importDefault(require("./ConfirmingPopup"));
const Form_1 = __importDefault(require("./Form"));
const Sended_1 = __importDefault(require("./Sended"));
class Swaper extends skynode_1.DomNode {
    constructor() {
        super(".swaper");
        this.loadHistoryNonce = 0;
        this.append((0, skynode_1.el)("section.swap-container", (0, skynode_1.el)(".form-container", (this.fromForm = new Form_1.default(this, 8217, true)), (0, skynode_1.el)("img.arrow", { src: "/images/shared/icn/icn-arrow-right.svg", height: "50", alt: "icn-arrow-right" }), (this.toForm = new Form_1.default(this, 1))), (0, skynode_1.el)(".amount-container", (0, skynode_1.el)(".title", "Amount"), (0, skynode_1.el)(".input-container", this.amountInput = (0, skynode_1.el)("input"))), (0, skynode_1.el)(".fee-container", (0, skynode_1.el)(".text-container", (0, skynode_1.el)(".title", "Fees"), (0, skynode_1.el)(".caption", "0.3% (Charged by Gaia Protocol)")), (0, skynode_1.el)(".text-container", this.feeDisplay = (0, skynode_1.el)(".amount", this.numberWithCommas("30")), (0, skynode_1.el)(".amount-caption", "APM"))), (0, skynode_1.el)(".received-container", (0, skynode_1.el)(".text-container", (0, skynode_1.el)(".title", "Estimated Received")), (0, skynode_1.el)(".text-container", this.feeDisplay = (0, skynode_1.el)(".amount", this.numberWithCommas("9999999", 3)), (0, skynode_1.el)(".amount-caption", "APM"))), (0, skynode_1.el)(".warning-container", (0, skynode_1.el)(".content", (0, skynode_1.el)("img", { src: "/images/shared/icn/icn-warning.svg", alt: "icn-warning.svg" }), (0, skynode_1.el)("p", "Gas costs are required for both chains to use the bridge."))), (0, skynode_1.el)(".button-container", (0, skynode_1.el)(".content", (0, skynode_1.el)("button.disable-button", "Approve"), (0, skynode_1.el)("button", "Transfer")))), (0, skynode_1.el)("section.history-container", (0, skynode_1.el)(".title", "The historical records"), (0, skynode_1.el)("p", "Once the transfer has started, Can’t cancel. Please ‘Retry’ if any transfers are missing."), (this.sendedList = (0, skynode_1.el)(".sended-list"))));
        this.fromForm.on("changeChain", (chainId, originChainId) => {
            if (this.toForm.chainId === chainId) {
                this.toForm.changeChain(originChainId);
            }
            this.loadHistory();
        });
        this.toForm.on("changeChain", (chainId, originChainId) => {
            if (this.fromForm.chainId === chainId) {
                this.fromForm.changeChain(originChainId);
            }
            this.loadHistory();
        });
        this.loadHistory();
        this.fromForm.on("connect", () => this.loadHistory());
        this.toForm.on("connect", () => this.loadHistory());
    }
    numberWithCommas(x, fixed = 3) {
        const parts = String(+(+x).toFixed(fixed)).split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
    }
    async loadHistory() {
        if (this.fromForm.sender !== undefined &&
            this.toForm.sender !== undefined) {
            const sender = await this.fromForm.sender.loadAddress();
            const receiver = await this.toForm.sender.loadAddress();
            if (sender !== undefined && receiver !== undefined) {
                const count = await this.fromForm.sender.sendingCounts(sender, this.toForm.chainId, receiver);
                this.loadHistoryNonce += 1;
                const nonce = this.loadHistoryNonce;
                this.sendedList.empty();
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
                    const sended = await this.fromForm.sender.sendedAmounts(sender, this.toForm.chainId, receiver, sendingId);
                    this.receive(sender, this.toForm.chainId, receiver, sendingId, sended);
                }
            }).appendTo(this.sendedList, 0);
        }
    }
    async send(amount) {
        if (this.fromForm.sender !== undefined &&
            this.toForm.sender !== undefined) {
            const receiver = await this.toForm.sender.loadAddress();
            if (receiver !== undefined) {
                await this.fromForm.sender.sendToken(this.toForm.chainId, receiver, amount);
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
                    const uri = `sign?receiver=${receiver}&fromChainId=${this.fromForm.chainId}&toChainId=${this.toForm.chainId}&sender=${sender}&sendingId=${sendingId}&amount=${amount.toString()}`;
                    const result1 = await superagent_1.default.get(`https://apm-test-api.gaiabridge.com/${uri}`).send();
                    const result2 = await superagent_1.default.get(`https://apm-test-api.gaiabridge.com/${uri}`).send();
                    const result3 = await superagent_1.default.get(`https://apm-test-api.gaiabridge.com/${uri}`).send();
                    if (result1.body.confirming === true ||
                        result2.body.confirming === true ||
                        result3.body.confirming === true) {
                        new ConfirmingPopup_1.default(() => {
                            this.receive(sender, toChainId, _receiver, sendingId, amount);
                        });
                    }
                    else {
                        let isFeePayed = this.fromForm.chainId === 8172;
                        const vs = [];
                        const rs = [];
                        const ss = [];
                        const sig1 = ethers_1.utils.splitSignature(result1.body.signedMessage);
                        const sig2 = ethers_1.utils.splitSignature(result2.body.signedMessage);
                        const sig3 = ethers_1.utils.splitSignature(result3.body.signedMessage);
                        vs.push(sig1.v);
                        rs.push(sig1.r);
                        ss.push(sig1.s);
                        vs.push(sig2.v);
                        rs.push(sig2.r);
                        ss.push(sig2.s);
                        vs.push(sig3.v);
                        rs.push(sig3.r);
                        ss.push(sig3.s);
                        await this.toForm.sender.receiveToken(sender, this.fromForm.chainId, receiver, amount, sendingId, isFeePayed, vs, rs, ss);
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