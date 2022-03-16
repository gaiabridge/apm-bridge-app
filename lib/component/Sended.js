"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const ethers_1 = require("ethers");
class Sended extends skynode_1.DomNode {
    constructor(fromChain, toChain, sender, receiver, sendId, retry) {
        super(".sended");
        this.fromChain = fromChain;
        this.toChain = toChain;
        this.sender = sender;
        this.receiver = receiver;
        this.sendId = sendId;
        this.retry = retry;
        this.receiveOverHorizonHandler = async (receiver, fromChain, sender, sendId) => {
            if (receiver === this.receiver && fromChain.toNumber() === this.fromChain && sender === this.sender && sendId.toNumber() === this.sendId) {
                this.load();
            }
        };
        this.load();
    }
    async load() {
        this.empty().append();
    }
    async getFormatting(balance) {
        console.log(balance);
        let balanceDisplay = ethers_1.utils.formatEther(balance);
        balanceDisplay = (+balanceDisplay).toFixed(4);
        return balanceDisplay;
    }
    delete() {
        super.delete();
    }
}
exports.default = Sended;
//# sourceMappingURL=Sended.js.map