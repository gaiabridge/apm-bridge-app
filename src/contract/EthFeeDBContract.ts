import { BigNumber } from "ethers";
import FeeDBArtifact from "./abi/artifacts/contracts/FeeDB.sol/FeeDB.json";
import EthereumContract from "./EthereumContract";

class FeeDBContract extends EthereumContract<any> {

    constructor() {
        super("0x8e9066E83390Fe46256044392eE1a930a0a19373", FeeDBArtifact.abi, []);
    }

    public async userDiscountRate(user: string): Promise<BigNumber> {
        return await this.contract.userDiscountRate(user);
    }
}

export default new FeeDBContract();
