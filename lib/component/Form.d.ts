import { DomNode } from "@hanul/skynode";
import GaiaBridgeInterface from "../contract/GaiaBridgeInterface";
import Swaper from "./Swaper";
export default class Form extends DomNode {
    private swaper;
    chainId: number;
    private isFrom;
    sender: GaiaBridgeInterface | undefined;
    private chainIcon;
    private chainSelect;
    private balanceDisplay;
    private addressDisplay;
    private buttonContainer;
    constructor(swaper: Swaper, chainId: number, isFrom?: boolean);
    changeChain(chainId: number): Promise<void>;
    private loadBalance;
    private connectHandler;
    private transferHandler;
    private sendHandler;
    delete(): void;
}
//# sourceMappingURL=Form.d.ts.map