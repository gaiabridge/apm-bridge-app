"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const KAPMCoin_json_1 = __importDefault(require("./abi/artifacts/contracts/KAPMCoin.sol/KAPMCoin.json"));
const KIP7Contract_1 = __importDefault(require("./klaytn-standard/KIP7Contract"));
class KAPMCoinContract extends KIP7Contract_1.default {
    constructor() {
        super("0x1c70233b082b38aabccd4524418a26e81b8378a4", KAPMCoin_json_1.default.abi);
    }
}
exports.default = new KAPMCoinContract();
//# sourceMappingURL=KAPMContract.js.map