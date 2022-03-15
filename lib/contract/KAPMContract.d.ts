import { BigNumber, BigNumberish } from "@ethersproject/bignumber";
import GaiaBridgeInterface from "./GaiaBridgeInterface";
import KIP7Contract from "./klaytn-standard/KIP7Contract";
declare class KAPMContract extends KIP7Contract implements GaiaBridgeInterface {
    constructor();
    private watch;
    private getSendOverHorizonEvents;
    private getReceiveOverHorizonEvents;
    loadAddress(): Promise<string | undefined>;
    connect(): Promise<void>;
    addTokenToWallet(): void;
    sendToken(toChain: BigNumberish, receiver: string, amount: BigNumberish): Promise<void>;
    sendedAmounts(sender: string, toChainId: BigNumberish, receiver: string, sendingId: BigNumberish): Promise<BigNumber>;
    sendingCounts(sender: string, toChainId: BigNumberish, receiver: string): Promise<BigNumber>;
    receiveToken(sender: string, fromChain: BigNumberish, receiver: string, amount: BigNumberish, sendingId: BigNumberish, isFeePayed: boolean, vs: number[], rs: string[], ss: string[]): Promise<void>;
    isTokenReceived(sender: string, fromChain: BigNumberish, receiver: string, sendingId: BigNumberish): Promise<boolean>;
}
declare const _default: KAPMContract;
export default _default;
//# sourceMappingURL=KAPMContract.d.ts.map