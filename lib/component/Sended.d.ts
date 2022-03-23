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
    private fromImage;
    private toImage;
    private fromChainText;
    private toChainText;
    constructor(fromSender: GaiaBridgeInterface, toSender: GaiaBridgeInterface, fromChainId: number, toChainId: number, sender: string, receiver: string, sendingId: number, retry: () => void);
    private load;
    private loadChain;
    private getFormatting;
    private receiveTokenHandler;
    delete(): void;
}
//# sourceMappingURL=Sended.d.ts.map