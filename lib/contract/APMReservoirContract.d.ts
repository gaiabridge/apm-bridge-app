import { BigNumber, BigNumberish } from "@ethersproject/bignumber";
import EthereumContract from "./EthereumContract";
import GaiaBridgeInterface from "./GaiaBridgeInterface";
declare class APMReservoirContract extends EthereumContract<any> implements GaiaBridgeInterface {
    constructor();
    balanceOf(owner: string): Promise<BigNumber>;
    loadAddress(): Promise<string | undefined>;
    connect(): Promise<void>;
    addTokenToWallet(): void;
    sendToken(toChain: BigNumberish, receiver: string, amount: BigNumberish, data: string): Promise<void>;
    sendingData(sender: string, toChainId: BigNumberish, receiver: string, sendingId: BigNumberish): Promise<{
        amount: BigNumber;
        atBlock: BigNumber;
        isFeePayed: boolean;
        protocolFee: BigNumber;
        senderDiscountRate: BigNumber;
    }>;
    sendingCounts(sender: string, toChainId: BigNumberish, receiver: string): Promise<BigNumber>;
    receiveToken(sender: string, fromChainId: BigNumberish, receiver: string, amount: BigNumberish, sendingId: BigNumberish, isFeePayed: boolean, protocolFee: BigNumberish, senderDiscountRate: BigNumberish, data: string, vs: number[], rs: string[], ss: string[]): Promise<void>;
    isTokenReceived(sender: string, fromChain: BigNumberish, receiver: string, sendingId: BigNumberish): Promise<boolean>;
    getTransferEvents(to: string, startBlock: number, endBlock: number): Promise<any>;
}
declare const _default: APMReservoirContract;
export default _default;
//# sourceMappingURL=APMReservoirContract.d.ts.map