import { BigNumber, BigNumberish } from "@ethersproject/bignumber";
import GaiaBridgeInterface from "./GaiaBridgeInterface";
import KlaytnContract from "./KlaytnContract";
declare class KAPMReservoirContract extends KlaytnContract implements GaiaBridgeInterface {
    constructor();
    private watch;
    balanceOf(owner: string): Promise<BigNumber>;
    private getSendTokenEvents;
    private getReceiveTokenEvents;
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
}
declare const _default: KAPMReservoirContract;
export default _default;
//# sourceMappingURL=KAPMReservoirContract.d.ts.map