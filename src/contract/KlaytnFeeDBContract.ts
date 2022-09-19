import { BigNumber } from "ethers";
import Klaytn from "../klaytn/Klaytn";
import FeeDBArtifact from "./abi/artifacts/contracts/FeeDB.sol/FeeDB.json";
import KlaytnContract from "./KlaytnContract";

class KlaytnFeeDBContract extends KlaytnContract {

    constructor() {
        super("0xc8c424b91d8ce0137bab4b832b7f7d154156ba6c", FeeDBArtifact.abi);
    }

    public async userDiscountRate(user: string): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("userDiscountRate", user));
    }
}

export default new KlaytnFeeDBContract();
