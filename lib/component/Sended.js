"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const ethers_1 = require("ethers");
class Sended extends skynode_1.DomNode {
    constructor(fromSender, toSender, fromChainId, toChainId, sender, receiver, sendingId, retry) {
        super(".sended");
        this.fromSender = fromSender;
        this.toSender = toSender;
        this.fromChainId = fromChainId;
        this.toChainId = toChainId;
        this.sender = sender;
        this.receiver = receiver;
        this.sendingId = sendingId;
        this.retry = retry;
        this.receiveTokenHandler = async (receiver, fromChain, sender, sendId) => {
            if (receiver === this.receiver && fromChain.toNumber() === this.fromChainId && sender === this.sender && sendId.toNumber() === this.sendingId) {
                this.load();
            }
        };
        this.load();
        this.toSender.on("ReceiveToken", this.receiveTokenHandler);
    }
    async load() {
        const sended = await this.fromSender.sendedAmounts(this.sender, this.toChainId, this.receiver, this.sendingId);
        const received = await this.toSender.isTokenReceived(this.sender, this.fromChainId, this.receiver, this.sendingId);
        console.log(received);
        this.empty().append((0, skynode_1.el)(".message", `${await this.getFormatting(sended)} MIX`), received === true ? (0, skynode_1.el)(".done", "전송 완료") : (0, skynode_1.el)("a.retry-button", "재시도", {
            click: () => this.retry(),
        }));
    }
    async getFormatting(balance) {
        console.log(balance);
        let balanceDisplay = ethers_1.utils.formatEther(balance);
        balanceDisplay = (+balanceDisplay).toFixed(4);
        return balanceDisplay;
    }
    delete() {
        this.toSender.off("ReceiveToken", this.receiveTokenHandler);
        super.delete();
    }
}
exports.default = Sended;
//# sourceMappingURL=Sended.js.map