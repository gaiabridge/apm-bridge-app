import { DomNode } from "@hanul/skynode";
import Swaper from "./Swaper";
export default class Form extends DomNode {
    private swaper;
    chainId: number;
    private isFrom;
    private chainIcon;
    private chainSelect;
    constructor(swaper: Swaper, chainId: number, isFrom?: boolean);
    changeChain(chainId: number): Promise<void>;
}
//# sourceMappingURL=Form.d.ts.map