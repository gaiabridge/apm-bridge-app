import { BigNumber } from "ethers";
import KlaytnContract from "./KlaytnContract";
declare class KlaytnFeeDBContract extends KlaytnContract {
    constructor();
    userDiscountRate(user: string): Promise<BigNumber>;
}
declare const _default: KlaytnFeeDBContract;
export default _default;
//# sourceMappingURL=KlaytnFeeDBContract.d.ts.map