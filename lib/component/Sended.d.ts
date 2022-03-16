import { DomNode } from "@hanul/skynode";
export default class Sended extends DomNode {
    private fromChain;
    private toChain;
    private sender;
    private receiver;
    private sendId;
    private retry;
    constructor(fromChain: number, toChain: number, sender: string, receiver: string, sendId: number, retry: () => void);
    private load;
    private getFormatting;
    private receiveOverHorizonHandler;
    delete(): void;
}
//# sourceMappingURL=Sended.d.ts.map