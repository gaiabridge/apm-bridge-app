class Klaytn {

    public caver = new (window as any).Caver("https://en.apm-coin.com:8551");

    public createContract(address: string, abi: any) {
        return this.caver.contract.create(abi, address);
    }

    public async loadBlockNumber() {
        return await this.caver.klay.getBlockNumber();
    }
}

export default new Klaytn();
