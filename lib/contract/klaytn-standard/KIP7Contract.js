"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const KlaytnContract_1 = __importDefault(require("../KlaytnContract"));
class KIP7Contract extends KlaytnContract_1.default {
    constructor(address, abi) {
        super(address, abi);
    }
    async getName() {
        return await this.runMethod("name");
    }
    async getTotalSupply() {
        return ethers_1.BigNumber.from(await this.runMethod("totalSupply"));
    }
    async balanceOf(owner) {
        return ethers_1.BigNumber.from(await this.runMethod("balanceOf", owner));
    }
    async allowance(owner, spender) {
        return ethers_1.BigNumber.from(await this.runMethod("allowance", owner, spender));
    }
    async transfer(to, amount) {
        await this.runWalletMethod("transfer", to, amount);
    }
    async transferFrom(from, to, amount) {
        await this.runWalletMethod("transferFrom", from, to, amount);
    }
    async approve(spender, amount) {
        await this.runWalletMethod("approve", spender, amount);
    }
    async getApprovalEvents(startBlock, endBlock) {
        const events = await this.contract.getPastEvents("Approval", {
            fromBlock: startBlock,
            toBlock: endBlock,
        });
        return events;
    }
    async getTransferEvents(startBlock, endBlock) {
        const events = await this.contract.getPastEvents("Transfer", {
            fromBlock: startBlock,
            toBlock: endBlock,
        });
        return events;
    }
}
exports.default = KIP7Contract;
//# sourceMappingURL=KIP7Contract.js.map