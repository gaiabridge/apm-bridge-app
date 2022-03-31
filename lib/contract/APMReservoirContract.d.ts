import { BigNumber, BigNumberish } from "@ethersproject/bignumber";
import EthereumContract from "./EthereumContract";
import GaiaBridgeInterface from "./GaiaBridgeInterface";
declare class APMReservoirContract extends EthereumContract<any> implements GaiaBridgeInterface {
    constructor();
    balanceOf(owner: string): Promise<BigNumber>;
    loadAddress(): Promise<string | undefined>;
    connect(): Promise<void>;
    addTokenToWallet(): void;
    sendToken(toChain: BigNumberish, receiver: string, amount: BigNumberish): Promise<void>;
    sendedAmounts(sender: string, toChainId: BigNumberish, receiver: string, sendingId: BigNumberish): Promise<BigNumber>;
    sendingBlock(sender: string, toChainId: BigNumberish, receiver: string, sendingId: BigNumberish): Promise<BigNumber>;
    sendingCounts(sender: string, toChainId: BigNumberish, receiver: string): Promise<BigNumber>;
    receiveToken(sender: string, fromChain: BigNumberish, receiver: string, amount: BigNumberish, sendingId: BigNumberish, isFeePayed: boolean, vs: number[], rs: string[], ss: string[]): Promise<void>;
    isTokenReceived(sender: string, fromChain: BigNumberish, receiver: string, sendingId: BigNumberish): Promise<boolean>;
    getTransferEvents(to: string, startBlock: number, endBlock: number): Promise<any>;
}
declare const _default: APMReservoirContract;
export default _default;
//# sourceMappingURL=APMReservoirContract.d.ts.map