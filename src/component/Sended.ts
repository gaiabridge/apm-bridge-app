import { DomNode, el } from "@hanul/skynode";
import { BigNumber, utils } from "ethers";
import GaiaBridgeInterface from "../contract/GaiaBridgeInterface";

export default class Sended extends DomNode {

    constructor(
        private fromSender: GaiaBridgeInterface,
        private toSender: GaiaBridgeInterface,

        private fromChainId: number,
        private toChainId: number,

        private sender: string,
        private receiver: string,

        private sendingId: number,

        private retry: () => void,
    ) {
        super(".sended");
        this.load();
        this.toSender.on("ReceiveToken", this.receiveTokenHandler);
    }

    private async load() {
        const sended = await this.fromSender.sendedAmounts(this.sender, this.toChainId, this.receiver, this.sendingId);
        const received = await this.toSender.isTokenReceived(this.sender, this.fromChainId, this.receiver, this.sendingId);
        console.log(received);

        this.empty().append(
            el(".message", `${await this.getFormatting(sended)} APM`,),
            received === true ? el(".done", "전송 완료") : el("a.retry-button", "재시도", {
                click: () => this.retry(),
            }),
        );
    }

    private async getFormatting(balance: BigNumber) {
        console.log(balance)
        let balanceDisplay = utils.formatEther(balance!)
        balanceDisplay = (+balanceDisplay).toFixed(4);
        return balanceDisplay;
    }

    private receiveTokenHandler = async (receiver: string, fromChain: BigNumber, sender: string, sendId: BigNumber) => {
        if (receiver === this.receiver && fromChain.toNumber() === this.fromChainId && sender === this.sender && sendId.toNumber() === this.sendingId) {
            this.load();
        }
    }

    public delete() {
        this.toSender.off("ReceiveToken", this.receiveTokenHandler);
        super.delete();
    }
}
