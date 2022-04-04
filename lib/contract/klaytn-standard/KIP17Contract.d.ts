import { BigNumber, BigNumberish, ContractInterface } from "ethers";
import KlaytnContract from "../KlaytnContract";
export default class KIP17Contract extends KlaytnContract {
    constructor(address: string, abi: ContractInterface);
    ownerOf(mateId: BigNumberish): Promise<string>;
    balanceOf(owner: string): Promise<BigNumber>;
    transfer(to: string, id: BigNumberish): Promise<void>;
    isApprovedForAll(owner: string, operator: string): Promise<boolean>;
    setApprovalForAll(operator: string, approved: boolean): Promise<void>;
    tokenURI(id: BigNumberish): Promise<string>;
    tokenOfOwnerByIndex(owner: string, index: BigNumberish): Promise<BigNumber>;
}
//# sourceMappingURL=KIP17Contract.d.ts.map