"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bignumber_1 = require("@ethersproject/bignumber");
const Klaytn_1 = __importDefault(require("../klaytn/Klaytn"));
const KlaytnWallet_1 = __importDefault(require("../klaytn/KlaytnWallet"));
const KAPM_json_1 = __importDefault(require("./abi/artifacts/contracts/KAPM.sol/KAPM.json"));
const KAPMContract_1 = __importDefault(require("./KAPMContract"));
const KlaytnContract_1 = __importDefault(require("./KlaytnContract"));
class KAPMReservoirContract extends KlaytnContract_1.default {
    constructor() {
        super("0x14b72d1fa82d131d81fdaea5a9378b65587a13e1", KAPM_json_1.default.abi);
        KlaytnWallet_1.default.toss("connect", this);
        this.watch();
    }
    async balanceOf(owner) {
        return await KAPMContract_1.default.balanceOf(owner);
    }
    async watch() {
        let prevBlock = await Klaytn_1.default.loadBlockNumber();
        setInterval(async () => {
            const currentBlock = await Klaytn_1.default.loadBlockNumber();
            const transferEvents = await KAPMContract_1.default.getTransferEvents(prevBlock, currentBlock);
            for (const event of transferEvents) {
                this.fireEvent("Transfer", event.returnValues[0], event.returnValues[1], bignumber_1.BigNumber.from(event.returnValues[2]));
            }
            const sendEvents = await this.getSendTokenEvents(prevBlock, currentBlock);
            for (const event of sendEvents) {
                this.fireEvent("SendToken", event.returnValues[0], bignumber_1.BigNumber.from(event.returnValues[1]), event.returnValues[2], bignumber_1.BigNumber.from(event.returnValues[3]), bignumber_1.BigNumber.from(event.returnValues[4]), event.returnValues[5]);
            }
            const receiveTokenEvents = await this.getReceiveTokenEvents(prevBlock, currentBlock);
            for (const event of receiveTokenEvents) {
                this.fireEvent("ReceiveToken", event.returnValues[0], bignumber_1.BigNumber.from(event.returnValues[1]), event.returnValues[2], bignumber_1.BigNumber.from(event.returnValues[3]), bignumber_1.BigNumber.from(event.returnValues[4]), event.returnValues[5]);
            }
            prevBlock = currentBlock + 1;
        }, 2000);
    }
    async getSendTokenEvents(startBlock, endBlock) {
        const events = await this.contract.getPastEvents("SendToken", {
            fromBlock: startBlock,
            toBlock: endBlock,
        });
        return events;
    }
    async getReceiveTokenEvents(startBlock, endBlock) {
        const events = await this.contract.getPastEvents("ReceiveToken", {
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
        KlaytnWallet_1.default.addToken(this.address, "KAPM", 18, "https://apm-test.gaiabridge.com/images/shared/icn/icn-apmcoin.png");
    }
    async sendToken(toChain, receiver, amount) {
        await this.runWalletMethod("sendToken", toChain, receiver, amount);
    }
    async sendedAmounts(sender, toChainId, receiver, sendingId) {
        return bignumber_1.BigNumber.from(await this.runMethod("sendedAmounts", sender, toChainId, receiver, sendingId));
    }
    async sendingCounts(sender, toChainId, receiver) {
        return bignumber_1.BigNumber.from(await this.runMethod("sendingCounts", sender, toChainId, receiver));
    }
    async receiveToken(sender, fromChain, receiver, amount, sendingId, isFeePayed, vs, rs, ss) {
        await this.runWalletMethod("receiveToken", sender, fromChain, receiver, amount, sendingId, isFeePayed, vs, rs, ss);
    }
    async isTokenReceived(sender, fromChain, receiver, sendingId) {
        return await this.runMethod("isTokenReceived", sender, fromChain, receiver, sendingId);
    }
}
exports.default = new KAPMReservoirContract();
//# sourceMappingURL=KAPMReservoirContract.js.map