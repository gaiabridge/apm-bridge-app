"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Klaytn {
    constructor() {
        this.caver = new window.Caver("https://public-node-api.klaytnapi.com/v1/cypress");
    }
    createContract(address, abi) {
        return this.caver.contract.create(abi, address);
    }
    async loadBlockNumber() {
        return await this.caver.klay.getBlockNumber();
    }
}
exports.default = new Klaytn();
//# sourceMappingURL=Klaytn.js.map