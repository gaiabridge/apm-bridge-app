import { BigNumber, BigNumberish, ContractInterface } from "ethers";
import KlaytnWallet from "../../klaytn/KlaytnWallet";
import KlaytnContract from "../KlaytnContract";

export default class KIP17Contract extends KlaytnContract {

    constructor(address: string, abi: ContractInterface) {
        super(address, abi);
    }

    public async ownerOf(mateId: BigNumberish): Promise<string> {
        return await this.runMethod("ownerOf", mateId);
    }

    public async balanceOf(owner: string): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("balanceOf", owner));
    }

    public async transfer(to: string, id: BigNumberish) {
        await this.runWalletMethod("transferFrom", await KlaytnWallet.loadAddress(), to, id);
    }

    public async isApprovedForAll(owner: string, operator: string): Promise<boolean> {
        return await this.runMethod("isApprovedForAll", owner, operator);
    }

    public async setApprovalForAll(operator: string, approved: boolean) {
        await this.runWalletMethod("setApprovalForAll", operator, approved);
    }

    public async tokenURI(id: BigNumberish): Promise<string> {
        return await this.runMethod("tokenURI", id);
    }

    public async tokenOfOwnerByIndex(owner: string, index: BigNumberish): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("tokenOfOwnerByIndex", owner, index));
    }
}
