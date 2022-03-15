import { BigNumber, BigNumberish } from "@ethersproject/bignumber";

export default interface GaiaBridgeInterface {

    on(eventName: string, eventHandler: any): void;
    off(eventName: string, eventHandler: any): void;

    loadAddress(): Promise<string | undefined>;
    connect(): Promise<void>;
    balanceOf(owner: string): Promise<BigNumber>;
    addTokenToWallet(): void;

    sendToken(toChain: BigNumberish, receiver: string, amount: BigNumberish): Promise<void>;
    sendedAmounts(sender: string, toChainId: BigNumberish, receiver: string, sendingId: BigNumberish): Promise<BigNumber>;
    sendingCounts(sender: string, toChainId: BigNumberish, receiver: string): Promise<BigNumber>;
    receiveToken(sender: string, fromChain: BigNumberish, receiver: string, amount: BigNumberish, sendingId: BigNumberish, isFeePayed: boolean,
        vs: number[],
        rs: string[],
        ss: string[],
    ): Promise<void>;
    isTokenReceived(sender: string, fromChain: BigNumberish, receiver: string, sendingId: BigNumberish): Promise<boolean>;
}