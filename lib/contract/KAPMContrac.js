"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bignumber_1 = require("@ethersproject/bignumber");
const Klaytn_1 = __importDefault(require("../klaytn/Klaytn"));
const KlaytnWallet_1 = __importDefault(require("../klaytn/KlaytnWallet"));
const KAPM_json_1 = __importDefault(require("./abi/artifacts/contracts/KAPM.sol/KAPM.json"));
const KIP7Contract_1 = __importDefault(require("./klaytn-standard/KIP7Contract"));
class KAPMContract extends KIP7Contract_1.default {
    constructor() {
        super("0x364593d037C0b6F297cCf6dFfC516a1B3Fe690Fc", KAPM_json_1.default.abi);
        KlaytnWallet_1.default.toss("connect", this);
        this.watch();
    }
    async watch() {
        let prevBlock = await Klaytn_1.default.loadBlockNumber();
        setInterval(async () => {
            const currentBlock = await Klaytn_1.default.loadBlockNumber();
            const transferEvents = await this.getTransferEvents(prevBlock, currentBlock);
            for (const event of transferEvents) {
                this.fireEvent("Transfer", event.returnValues[0], event.returnValues[1], bignumber_1.BigNumber.from(event.returnValues[2]));
            }
            const sendOverHorizonEvents = await this.getSendOverHorizonEvents(prevBlock, currentBlock);
            for (const event of sendOverHorizonEvents) {
                this.fireEvent("SendOverHorizon", event.returnValues[0], bignumber_1.BigNumber.from(event.returnValues[1]), event.returnValues[2], bignumber_1.BigNumber.from(event.returnValues[3]), bignumber_1.BigNumber.from(event.returnValues[4]));
            }
            const receiveOverHorizonEvents = await this.getReceiveOverHorizonEvents(prevBlock, currentBlock);
            for (const event of receiveOverHorizonEvents) {
                this.fireEvent("ReceiveOverHorizon", event.returnValues[0], bignumber_1.BigNumber.from(event.returnValues[1]), event.returnValues[2], bignumber_1.BigNumber.from(event.returnValues[3]), bignumber_1.BigNumber.from(event.returnValues[4]));
            }
            prevBlock = currentBlock + 1;
        }, 2000);
    }
    async getSendOverHorizonEvents(startBlock, endBlock) {
        const events = await this.contract.getPastEvents("SendOverHorizon", {
            fromBlock: startBlock,
            toBlock: endBlock,
        });
        return events;
    }
    async getReceiveOverHorizonEvents(startBlock, endBlock) {
        const events = await this.contract.getPastEvents("ReceiveOverHorizon", {
            fromBlock: startBlock,
            toBlock: endBlock,
        });
        return events;
    }
    async loadAddress() {
        return await KlaytnWallet_1.default.loadAddress();
    }
    async connect() {
        await KlaytnWallet_1.default.connect();
    }
    addTokenToWallet() {
        KlaytnWallet_1.default.addToken(this.address, "KPAX", 18, "https://raw.githubusercontent.com/clonesneverdie/kpax/main/docs/kpax.png");
    }
    async sendOverHorizon(toChain, receiver, amount) {
        await this.runWalletMethod("sendOverHorizon", toChain, receiver, amount);
    }
    async sended(sender, toChain, receiver, index) {
        return bignumber_1.BigNumber.from(await this.runMethod("sended", sender, toChain, receiver, index));
    }
    async sendCount(sender, toChain, receiver) {
        return bignumber_1.BigNumber.from(await this.runMethod("sendCount", sender, toChain, receiver));
    }
    async receiveOverHorizon(fromChain, sender, sendId, amount, signature) {
        await this.runWalletMethod("receiveOverHorizon", fromChain, sender, sendId, amount, signature);
    }
    async received(receiver, fromChain, sender, sendId) {
        return await this.runMethod("received", receiver, fromChain, sender, sendId);
    }
}
exports.default = new KAPMContract();
//# sourceMappingURL=KAPMContrac.js.map