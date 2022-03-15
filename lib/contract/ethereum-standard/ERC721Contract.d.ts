import { BigNumber, BigNumberish, ContractInterface, ethers } from "ethers";
import EthereumContract from "../EthereumContract";
export default abstract class ERC721Contract<CT extends ethers.Contract> extends EthereumContract<CT> {
    constructor(address: string, abi: ContractInterface, eventNames: string[]);
    getName(): Promise<string>;
    balanceOf(owner: string): Promise<BigNumber>;
    ownerOf(id: BigNumberish): Promise<string>;
    getNonce(id: BigNumberish): Promise<BigNumber>;
    getNonceForAll(owner: string): Promise<BigNumber>;
    isApprovedForAll(owner: string, operator: string): Promise<boolean>;
    transfer(to: string, id: BigNumberish): Promise<void>;
}
//# sourceMappingURL=ERC721Contract.d.ts.map