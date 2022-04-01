"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const ethers_1 = require("ethers");
const APMReservoirContract_1 = __importDefault(require("../contract/APMReservoirContract"));
const EthereumNetworkProvider_1 = __importDefault(require("../ethereum/EthereumNetworkProvider"));
class Sended extends skynode_1.DomNode {
    constructor(fromSender, toSender, fromChainId, toChainId, sender, receiver, sendingId, retry) {
        super("tbody");
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
        let recieveButton;
        this.empty().append((0, skynode_1.el)("tr", (0, skynode_1.el)("td", (0, skynode_1.el)(".chain-container", this.fromImage = (0, skynode_1.el)("img", {
            src: this.fromChainId === 1 ? "/images/shared/icn/icn-ethereum.svg" : "/images/shared/icn/icn-klaytn.svg",
        }), this.fromChainText = (0, skynode_1.el)("p", this.fromChainId === 1 ? "Ethereum" : "Klaytn"))), (0, skynode_1.el)("td", (0, skynode_1.el)(".chain-container", this.toImage = (0, skynode_1.el)("img", {
            src: this.toChainId === 1 ? "/images/shared/icn/icn-ethereum.svg" : "/images/shared/icn/icn-klaytn.svg",
        }), this.toChainText = (0, skynode_1.el)("p", this.toChainId === 1 ? "Ethereum" : "Klaytn"))), (0, skynode_1.el)("td", (0, skynode_1.el)("p", `${await this.getFormatting(sended)} APM`)), (0, skynode_1.el)("td", (0, skynode_1.el)("p", `${Number(await this.getFormatting(sended)) * 0.3 / 100} APM`)), (0, skynode_1.el)("td", received === true ? (0, skynode_1.el)("p", "Done") : recieveButton = (0, skynode_1.el)("button", "...", {
            click: () => this.retry(),
        }))));
        if (recieveButton !== undefined) {
            if (this.fromChainId === 1) {
                const interval = setInterval(async () => {
                    if (recieveButton?.deleted === true) {
                        clearInterval(interval);
                    }
                    else {
                        const sendingBlock = await APMReservoirContract_1.default.sendingBlock(this.sender, this.toChainId, this.receiver, this.sendingId);
                        const currentBlock = await EthereumNetworkProvider_1.default.getBlockNumber();
                        const remainBlocks = currentBlock - sendingBlock.toNumber();
                        if (remainBlocks < 32) {
                            recieveButton?.empty().appendText(`${remainBlocks} / 32`);
                        }
                        else {
                            recieveButton?.empty().appendText("Recieve");
                        }
                    }
                }, 15000);
            }
            else {
                recieveButton?.empty().appendText("Recieve");
            }
        }
        this.loadChain();
    }
    async loadChain() {
        if (this.fromChainId === 8217) {
            if (this.fromImage !== undefined) {
                this.fromImage.domElement.src = "/images/shared/icn/icn-klaytn.svg";
            }
            this.fromChainText?.empty().appendText("Klaytn");
        }
        else if (this.fromChainId === 1) {
            if (this.fromImage !== undefined) {
                this.fromImage.domElement.src = "/images/shared/icn/icn-ethereum.svg";
            }
            this.fromChainText?.empty().appendText("Ethereum");
        }
        if (this.toChainId === 8217) {
            if (this.toImage !== undefined) {
                this.toImage.domElement.src = "/images/shared/icn/icn-klaytn.svg";
            }
            this.toChainText?.empty().appendText("Klaytn");
        }
        else if (this.toChainId === 1) {
            if (this.toImage !== undefined) {
                this.toImage.domElement.src = "/images/shared/icn/icn-ethereum.svg";
            }
            this.toChainText?.empty().appendText("Ethereum");
        }
    }
    async getFormatting(balance) {
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