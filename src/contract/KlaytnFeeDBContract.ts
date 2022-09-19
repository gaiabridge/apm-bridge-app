import { BigNumber } from "ethers";
import Klaytn from "../klaytn/Klaytn";
import FeeDBArtifact from "./abi/artifacts/contracts/FeeDB.sol/FeeDB.json";
import KlaytnContract from "./KlaytnContract";

class KlaytnFeeDBContract extends KlaytnContract {

    constructor() {
        super("0xe06C67d792CADd2E58573f09C26B188c6A00A971", FeeDBArtifact.abi);
    }

    public async userDiscountRate(user: string): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("userDiscountRate", user));
    }
}

export default new KlaytnFeeDBContract();
