"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const KAPM_json_1 = __importDefault(require("./abi/artifacts/contracts/KAPM.sol/KAPM.json"));
const KIP7Contract_1 = __importDefault(require("./klaytn-standard/KIP7Contract"));
class KAPMContract extends KIP7Contract_1.default {
    constructor() {
        super("0x1c70233b082b38aabccd4524418a26e81b8378a4", KAPM_json_1.default.abi);
    }
}
exports.default = new KAPMContract();
//# sourceMappingURL=KAPMContract.js.map