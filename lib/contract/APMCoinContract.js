"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Config_1 = __importDefault(require("../Config"));
const IERC20_json_1 = __importDefault(require("./abi/artifacts/@openzeppelin/contracts/token/ERC20/IERC20.sol/IERC20.json"));
const ERC20Contract_1 = __importDefault(require("./ethereum-standard/ERC20Contract"));
class APMCoinContract extends ERC20Contract_1.default {
    constructor() {
        super(Config_1.default.contracts.APMCoin, IERC20_json_1.default.abi, ["Approval"]);
    }
}
exports.default = new APMCoinContract();
//# sourceMappingURL=APMCoinContract.js.map