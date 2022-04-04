"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const Config_1 = __importDefault(require("../Config"));
const Klaytn_1 = __importDefault(require("../klaytn/Klaytn"));
const KAPMCoin_json_1 = __importDefault(require("./abi/artifacts/contracts/KAPMCoin.sol/KAPMCoin.json"));
const KIP7Contract_1 = __importDefault(require("./klaytn-standard/KIP7Contract"));
class KAPMCoinContract extends KIP7Contract_1.default {
    constructor() {
        super(Config_1.default.contracts.KAPMCoin, KAPMCoin_json_1.default.abi);
        this.watch();
    }
    async watch() {
        let prevBlock = await Klaytn_1.default.loadBlockNumber();
        setInterval(async () => {
            const currentBlock = await Klaytn_1.default.loadBlockNumber();
            const transferEvents = await this.getTransferEvents(prevBlock, currentBlock);
            for (const event of transferEvents) {
                this.fireEvent("Transfer", event.returnValues[0], event.returnValues[1], ethers_1.BigNumber.from(event.returnValues[2]));
            }
            const approvalEvents = await this.getApprovalEvents(prevBlock, currentBlock);
            for (const event of approvalEvents) {
                this.fireEvent("Approval", event.returnValues[0], event.returnValues[1], ethers_1.BigNumber.from(event.returnValues[2]));
            }
            prevBlock = currentBlock + 1;
        }, 2000);
    }
}
exports.default = new KAPMCoinContract();
//# sourceMappingURL=KAPMContract.js.map