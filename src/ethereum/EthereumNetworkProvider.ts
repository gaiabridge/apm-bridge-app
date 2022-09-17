import { ethers } from "ethers";
import EventContainer from "eventcontainer";

class EthereumNetworkProvider extends EventContainer {

    public provider: ethers.providers.WebSocketProvider;
    public signer: ethers.providers.JsonRpcSigner;

    constructor() {
        super();
        this.provider = new ethers.providers.WebSocketProvider("wss://mainnet.infura.io/ws/v3/66b60f9d9e264aca9c377d66e14047c9");
        this.signer = this.provider.getSigner(ethers.constants.AddressZero);
    }

    public async getBlockNumber() {
        return await this.provider.getBlockNumber();
    }

    public async getBalance(address: string) {
        return await this.provider.getBalance(address);
    }
}

export default new EthereumNetworkProvider();
