import { BigNumber, BigNumberish } from "@ethersproject/bignumber";
import GaiaBridgeInterface from "./GaiaBridgeInterface";
import KlaytnContract from "./KlaytnContract";
declare class KAPMReservoirContract extends KlaytnContract implements GaiaBridgeInterface {
    constructor();
    balanceOf(owner: string): Promise<BigNumber>;
    private watch;
    private getSendTokenEvents;
    private getReceiveTokenEvents;
    loadAddress(): Promise<string | undefined>;
    connect(): Promise<void>;
    addTokenToWallet(): void;
    sendToken(toChain: BigNumberish, receiver: string, amount: BigNumberish): Promise<void>;
    sendedAmounts(sender: string, toChainId: BigNumberish, receiver: string, sendingId: BigNumberish): Promise<BigNumber>;
    sendingCounts(sender: string, toChainId: BigNumberish, receiver: string): Promise<BigNumber>;
    receiveToken(sender: string, fromChain: BigNumberish, receiver: string, amount: BigNumberish, sendingId: BigNumberish, isFeePayed: boolean, vs: number[], rs: string[], ss: string[]): Promise<void>;
    isTokenReceived(sender: string, fromChain: BigNumberish, receiver: string, sendingId: BigNumberish): Promise<boolean>;
}
declare const _default: KAPMReservoirContract;
export default _default;
//# sourceMappingURL=KAPMReservoirContract.d.ts.map