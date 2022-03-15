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
    sendOverHorizon(toChain: BigNumberish, receiver: string, amount: BigNumberish): Promise<void>;
    sended(sender: string, toChain: BigNumberish, receiver: string, index: BigNumberish): Promise<BigNumber>;
    sendCount(sender: string, toChain: BigNumberish, receiver: string): Promise<BigNumber>;
    receiveOverHorizon(fromChain: BigNumberish, sender: string, sendId: BigNumberish, amount: BigNumberish, signature: string): Promise<void>;
    received(receiver: string, fromChain: BigNumberish, sender: string, sendId: BigNumberish): Promise<boolean>;
}
declare const _default: KAPMContract;
export default _default;
//# sourceMappingURL=KAPMContrac.d.ts.map