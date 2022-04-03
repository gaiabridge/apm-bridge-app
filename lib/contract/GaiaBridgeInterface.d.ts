import { BigNumber, BigNumberish } from "@ethersproject/bignumber";
export default interface GaiaBridgeInterface {
    address: string;
    on(eventName: string, eventHandler: any): void;
    off(eventName: string, eventHandler: any): void;
    loadAddress(): Promise<string | undefined>;
    connect(): Promise<void>;
    balanceOf(owner: string): Promise<BigNumber>;
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
    isTokenReceived(sender: string, fromChainId: BigNumberish, receiver: string, sendingId: BigNumberish): Promise<boolean>;
}
//# sourceMappingURL=GaiaBridgeInterface.d.ts.map