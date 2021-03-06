import { BigNumber, BigNumberish, ContractInterface } from "ethers";
import KlaytnContract from "../KlaytnContract";

export default abstract class KIP7Contract extends KlaytnContract {

    constructor(address: string, abi: ContractInterface) {
        super(address, abi);
    }

    public async getName(): Promise<string> {
        return await this.runMethod("name");
    }

    public async getTotalSupply(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("totalSupply"));
    }

    public async balanceOf(owner: string): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("balanceOf", owner));
    }

    public async allowance(owner: string, spender: string): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("allowance", owner, spender));
    }

    public async transfer(to: string, amount: BigNumberish) {
        await this.runWalletMethod("transfer", to, amount);
    }

    public async transferFrom(from: string, to: string, amount: BigNumberish) {
        await this.runWalletMethod("transferFrom", from, to, amount);
    }

    public async approve(spender: string, amount: BigNumberish) {
        await this.runWalletMethod("approve", spender, amount);
    }

    public async getApprovalEvents(startBlock: number, endBlock: number) {
        const events = await this.contract.getPastEvents("Approval", {
            fromBlock: startBlock,
            toBlock: endBlock,
        });
        return events;
    }

    public async getTransferEvents(startBlock: number, endBlock: number) {
        const events = await this.contract.getPastEvents("Transfer", {
            fromBlock: startBlock,
            toBlock: endBlock,
        });
        return events;
    }
}
