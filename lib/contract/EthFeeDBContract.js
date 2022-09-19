"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FeeDB_json_1 = __importDefault(require("./abi/artifacts/contracts/FeeDB.sol/FeeDB.json"));
const EthereumContract_1 = __importDefault(require("./EthereumContract"));
class FeeDBContract extends EthereumContract_1.default {
    constructor() {
        super("0xe1Ca39953e182bE38e8D5E24C93ca94ABcCa0C6F", FeeDB_json_1.default.abi, []);
    }
    async userDiscountRate(user) {
        return await this.contract.userDiscountRate(user);
    }
}
exports.default = new FeeDBContract();
//# sourceMappingURL=EthFeeDBContract.js.map