import { DomNode } from "@hanul/skynode";
import GaiaBridgeInterface from "../contract/GaiaBridgeInterface";
export default class Sended extends DomNode {
    private fromSender;
    private toSender;
    private fromChainId;
    private toChainId;
    private sender;
    private receiver;
    private sendingId;
    private retry;
    constructor(fromSender: GaiaBridgeInterface, toSender: GaiaBridgeInterface, fromChainId: number, toChainId: number, sender: string, receiver: string, sendingId: number, retry: () => void);
    private load;
    private getFormatting;
    private receiveTokenHandler;
    delete(): void;
}
//# sourceMappingURL=Sended.d.ts.map