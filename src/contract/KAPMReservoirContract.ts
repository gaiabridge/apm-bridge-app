import { BigNumber, BigNumberish } from "@ethersproject/bignumber";
import Klaytn from "../klaytn/Klaytn";
import KlaytnWallet from "../klaytn/KlaytnWallet";
import KAPMReservoirArtifact from "./abi/artifacts/contracts/KAPMReservoir.sol/KAPMReservoir.json";
import GaiaBridgeInterface from "./GaiaBridgeInterface";
import KAPMContract from "./KAPMContract";
import KlaytnContract from "./KlaytnContract";

class KAPMReservoirContract extends KlaytnContract implements GaiaBridgeInterface {

    constructor() {
        super("0xf3122ebe20687cC77b6C478478Cf56Bf4ACBD5C5", KAPMReservoirArtifact.abi);
        KlaytnWallet.toss("connect", this);
        KAPMContract.toss("Transfer", this);
        KAPMContract.toss("Approval", this);
        this.watch();
    }

    private async watch() {
        let prevBlock = await Klaytn.loadBlockNumber();
        setInterval(async () => {
            const currentBlock = await Klaytn.loadBlockNumber();
            const sendEvents = await this.getSendTokenEvents(prevBlock, currentBlock);
            for (const event of sendEvents) {
                this.fireEvent("SendToken", event.returnValues[0], BigNumber.from(event.returnValues[1]), event.returnValues[2], BigNumber.from(event.returnValues[3]), BigNumber.from(event.returnValues[4]), event.returnValues[5]);
            }
            const receiveTokenEvents = await this.getReceiveTokenEvents(prevBlock, currentBlock);
            for (const event of receiveTokenEvents) {
                this.fireEvent("ReceiveToken", event.returnValues[0], BigNumber.from(event.returnValues[1]), event.returnValues[2], BigNumber.from(event.returnValues[3]), BigNumber.from(event.returnValues[4]), event.returnValues[5]);
            }
            prevBlock = currentBlock + 1;
        }, 2000);
    }

    public async balanceOf(owner: string): Promise<BigNumber> {
        return await KAPMContract.balanceOf(owner);
    }

    private async getSendTokenEvents(startBlock: number, endBlock: number) {
        const events = await this.contract.getPastEvents("SendToken", {
            fromBlock: startBlock,
            toBlock: endBlock,
        });
        return events;
    }

    private async getReceiveTokenEvents(startBlock: number, endBlock: number) {
        const events = await this.contract.getPastEvents("ReceiveToken", {
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
        KlaytnWallet.addToken(this.address, "KAPM", 18, "https://apm-test.gaiabridge.com/images/shared/icn/icn-apmcoin.png");
    }

    public async sendToken(toChain: BigNumberish, receiver: string, amount: BigNumberish, data: string) {
        await this.runWalletMethod("sendToken", toChain, receiver, amount, data);
    }

    public async sendingData(sender: string, toChainId: BigNumberish, receiver: string, sendingId: BigNumberish): Promise<{
        amount: BigNumber,
        atBlock: BigNumber,
        isFeePayed: boolean,
        protocolFee: BigNumber,
        senderDiscountRate: BigNumber,
    }> {
        const result = await this.runMethod("sendingData", sender, toChainId, receiver, sendingId);
        return {
            amount: BigNumber.from(result[0]),
            atBlock: BigNumber.from(result[1]),
            isFeePayed: result[2],
            protocolFee: BigNumber.from(result[3]),
            senderDiscountRate: BigNumber.from(result[4]),
        };
    }

    public async sendingCounts(sender: string, toChainId: BigNumberish, receiver: string): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("sendingCounts", sender, toChainId, receiver));
    }

    public async receiveToken(
        sender: string,
        fromChainId: BigNumberish,
        receiver: string,
        amount: BigNumberish,
        sendingId: BigNumberish,
        isFeePayed: boolean,
        protocolFee: BigNumberish,
        senderDiscountRate: BigNumberish,
        data: string,
        vs: number[],
        rs: string[],
        ss: string[],
    ): Promise<void> {
        await this.runWalletMethod("receiveToken", sender, fromChainId, receiver, amount, sendingId, isFeePayed, protocolFee, senderDiscountRate, data, vs, rs, ss);
    }

    public async isTokenReceived(sender: string, fromChain: BigNumberish, receiver: string, sendingId: BigNumberish): Promise<boolean> {
        return await this.runMethod("isTokenReceived", sender, fromChain, receiver, sendingId);
    }
}

export default new KAPMReservoirContract();
