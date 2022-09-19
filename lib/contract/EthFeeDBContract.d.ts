import { BigNumber } from "ethers";
import EthereumContract from "./EthereumContract";
declare class FeeDBContract extends EthereumContract<any> {
    constructor();
    userDiscountRate(user: string): Promise<BigNumber>;
}
declare const _default: FeeDBContract;
export default _default;
//# sourceMappingURL=EthFeeDBContract.d.ts.map