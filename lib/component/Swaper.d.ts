import { DomNode } from "@hanul/skynode";
import { BigNumber, BigNumberish } from "ethers";
export default class Swaper extends DomNode {
    private fromForm;
    private toForm;
    private amountInput;
    private sendedList;
    private feeDisplay;
    private receivedDisplay;
    private balanceDisplay;
    private approveButton;
    private transferButton;
    private chainIdsStore;
    constructor();
    private loadHistoryNonce;
    numberWithCommas(x: string, fixed?: number): string;
    private getApprove;
    private loadHistoryIndex;
    private loadHistory;
    addSended(sender: string, receiver: string, sendingId: BigNumber): void;
    send(amount: BigNumberish): Promise<void>;
    receive(sender: string, toChainId: BigNumberish, _receiver: string, sendingId: BigNumber, amount: BigNumberish): Promise<void>;
}
//# sourceMappingURL=Swaper.d.ts.map