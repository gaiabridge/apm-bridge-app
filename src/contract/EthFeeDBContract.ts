import { BigNumber } from "ethers";
import FeeDBArtifact from "./abi/artifacts/contracts/FeeDB.sol/FeeDB.json";
import EthereumContract from "./EthereumContract";

class FeeDBContract extends EthereumContract<any> {

    constructor() {
        super("0xe1Ca39953e182bE38e8D5E24C93ca94ABcCa0C6F", FeeDBArtifact.abi, []);
    }

    public async userDiscountRate(user: string): Promise<BigNumber> {
        return await this.contract.userDiscountRate(user);
    }
}

export default new FeeDBContract();
