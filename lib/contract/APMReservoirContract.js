"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const EthereumWallet_1 = __importDefault(require("../ethereum/EthereumWallet"));
const APMReservoir_json_1 = __importDefault(require("./abi/artifacts/contracts/APMReservoir.sol/APMReservoir.json"));
const APMCoinContract_1 = __importDefault(require("./APMCoinContract"));
const EthereumContract_1 = __importDefault(require("./EthereumContract"));
class APMReservoirContract extends EthereumContract_1.default {
    constructor() {
        super("0xa6eb2d8d059804bd7f2ac7579ceaeadabb921eaa", APMReservoir_json_1.default.abi, [
            "AddSigner",
            "RemoveSigner",
            "SendToken",
            "ReceiveToken",
        ]);
        APMCoinContract_1.default.toss("Transfer", this);
        EthereumWallet_1.default.toss("connect", this);
    }
    async balanceOf(owner) {
        return await APMCoinContract_1.default.balanceOf(owner);
    }
    async loadAddress() {
        return await EthereumWallet_1.default.loadAddress();
    }
    async connect() {
        await EthereumWallet_1.default.connect();
    }
    addTokenToWallet() {
        EthereumWallet_1.default.addToken(APMCoinContract_1.default.address, "APM", 18, "https://apm-test.gaiabridge.com/images/shared/icn/icn-apmcoin.png");
    }
    async sendToken(toChain, receiver, amount) {
        const owner = await EthereumWallet_1.default.loadAddress();
        if (owner !== undefined) {
            if ((await APMCoinContract_1.default.allowance(owner, this.address)).lt(amount)) {
                await APMCoinContract_1.default.approve(this.address, ethers_1.constants.MaxUint256);
            }
            else {
                const contract = await this.connectAndGetWalletContract();
                await contract?.sendToken(toChain, receiver, amount, ethers_1.constants.AddressZero);
            }
        }
    }
    async sendedAmounts(sender, toChainId, receiver, sendingId) {
        return (await this.contract.sendingData(sender, toChainId, receiver, sendingId))[0];
    }
    async sendingCounts(sender, toChainId, receiver) {
        return await this.contract.sendingCounts(sender, toChainId, receiver);
    }
    async receiveToken(sender, fromChain, receiver, amount, sendingId, isFeePayed, vs, rs, ss) {
        const contract = await this.connectAndGetWalletContract();
        await contract?.receiveToken(sender, fromChain, receiver, amount, sendingId, ethers_1.constants.AddressZero, isFeePayed, vs, rs, ss);
    }
    async isTokenReceived(sender, fromChain, receiver, sendingId) {
        return await this.contract.isTokenReceived(sender, fromChain, receiver, sendingId);
    }
    async getTransferEvents(to, startBlock, endBlock) {
        const filter = this.contract.filters.Transfer(null, to, null);
        return await this.contract.queryFilter(filter, startBlock, endBlock);
    }
}
exports.default = new APMReservoirContract();
//# sourceMappingURL=APMReservoirContract.js.map