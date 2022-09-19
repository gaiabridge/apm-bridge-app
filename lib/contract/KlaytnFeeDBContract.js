"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const FeeDB_json_1 = __importDefault(require("./abi/artifacts/contracts/FeeDB.sol/FeeDB.json"));
const KlaytnContract_1 = __importDefault(require("./KlaytnContract"));
class KlaytnFeeDBContract extends KlaytnContract_1.default {
    constructor() {
        super("0xc8c424b91d8ce0137bab4b832b7f7d154156ba6c", FeeDB_json_1.default.abi);
    }
    async userDiscountRate(user) {
        return ethers_1.BigNumber.from(await this.runMethod("userDiscountRate", user));
    }
}
exports.default = new KlaytnFeeDBContract();
//# sourceMappingURL=KlaytnFeeDBContract.js.map