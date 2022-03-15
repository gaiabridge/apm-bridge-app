import { BigNumber, BigNumberish } from "@ethersproject/bignumber";
import Klaytn from "../klaytn/Klaytn";
import KlaytnWallet from "../klaytn/KlaytnWallet";
import KAPMArtifact from "./abi/artifacts/contracts/KAPM.sol/KAPM.json";
import GaiaBridgeInterface from "./GaiaBridgeInterface";
import KIP7Contract from "./klaytn-standard/KIP7Contract";

class KAPMContract extends KIP7Contract implements GaiaBridgeInterface {

    constructor() {
        super("0x364593d037C0b6F297cCf6dFfC516a1B3Fe690Fc", KAPMArtifact.abi);
        KlaytnWallet.toss("connect", this);
        this.watch();
    }

    private async watch() {
        let prevBlock = await Klaytn.loadBlockNumber();
        setInterval(async () => {
            const currentBlock = await Klaytn.loadBlockNumber();
            const transferEvents = await this.getTransferEvents(prevBlock, currentBlock);
            for (const event of transferEvents) {
                this.fireEvent("Transfer", event.returnValues[0], event.returnValues[1], BigNumber.from(event.returnValues[2]));
            }
            const sendOverHorizonEvents = await this.getSendOverHorizonEvents(prevBlock, currentBlock);
            for (const event of sendOverHorizonEvents) {
                this.fireEvent("SendOverHorizon", event.returnValues[0], BigNumber.from(event.returnValues[1]), event.returnValues[2], BigNumber.from(event.returnValues[3]), BigNumber.from(event.returnValues[4]));
            }
            const receiveOverHorizonEvents = await this.getReceiveOverHorizonEvents(prevBlock, currentBlock);
            for (const event of receiveOverHorizonEvents) {
                this.fireEvent("ReceiveOverHorizon", event.returnValues[0], BigNumber.from(event.returnValues[1]), event.returnValues[2], BigNumber.from(event.returnValues[3]), BigNumber.from(event.returnValues[4]));
            }
            prevBlock = currentBlock + 1;
        }, 2000);
    }

    private async getSendOverHorizonEvents(startBlock: number, endBlock: number) {
        const events = await this.contract.getPastEvents("SendOverHorizon", {
            fromBlock: startBlock,
            toBlock: endBlock,
        });
        return events;
    }

    private async getReceiveOverHorizonEvents(startBlock: number, endBlock: number) {
        const events = await this.contract.getPastEvents("ReceiveOverHorizon", {
            fromBlock: startBlock,
            toBlock: endBlock,
        });
        return events;
    }

    public async loadAddress(): Promise<string | undefined> {
        return await KlaytnWallet.loadAddress();
    }

    public async connect() {
        await KlaytnWallet.connect();
    }

    public addTokenToWallet() {
        //KlaytnWallet.addToken(this.address, "KAPM", 18, "https://raw.githubusercontent.com/");
    }

    public async sendToken(toChain: BigNumberish, receiver: string, amount: BigNumberish) {
        await this.runWalletMethod("sendToken", toChain, receiver, amount);
    }

    public async sendedAmounts(sender: string, toChainId: BigNumberish, receiver: string, sendingId: BigNumberish): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("sendedAmounts", sender, toChainId, receiver, sendingId));
    }

    public async sendingCounts(sender: string, toChainId: BigNumberish, receiver: string): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("sendingCounts", sender, toChainId, receiver));
    }

    public async receiveToken(sender: string, fromChain: BigNumberish, receiver: string, amount: BigNumberish, sendingId: BigNumberish, isFeePayed: boolean,
        vs: number[],
        rs: string[],
        ss: string[],
    ) {
        await this.runWalletMethod("receiveToken", sender, fromChain, receiver, amount, sendingId, isFeePayed, vs, rs, ss);
    }

    public async isTokenReceived(sender: string, fromChain: BigNumberish, receiver: string, sendingId: BigNumberish): Promise<boolean> {
        return await this.runMethod("isTokenReceived", sender, fromChain, receiver, sendingId);
    }
}

export default new KAPMContract();
