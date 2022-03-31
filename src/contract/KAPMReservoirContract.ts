import { BigNumber, BigNumberish } from "@ethersproject/bignumber";
import { constants } from "ethers";
import Klaytn from "../klaytn/Klaytn";
import KlaytnWallet from "../klaytn/KlaytnWallet";
import KAPMReservoirArtifact from "./abi/artifacts/contracts/KAPMReservoir.sol/KAPMReservoir.json";
import GaiaBridgeInterface from "./GaiaBridgeInterface";
import KAPMContract from "./KAPMContract";
import KlaytnContract from "./KlaytnContract";

class KAPMReservoirContract extends KlaytnContract implements GaiaBridgeInterface {

    constructor() {
        super("0x14b72d1fa82d131d81fdaea5a9378b65587a13e1", KAPMReservoirArtifact.abi);
        KlaytnWallet.toss("connect", this);
        this.watch();
    }

    public async balanceOf(owner: string): Promise<BigNumber> {
        return await KAPMContract.balanceOf(owner);
    }

    private async watch() {
        let prevBlock = await Klaytn.loadBlockNumber();
        setInterval(async () => {
            const currentBlock = await Klaytn.loadBlockNumber();
            const transferEvents = await KAPMContract.getTransferEvents(prevBlock, currentBlock);
            for (const event of transferEvents) {
                this.fireEvent("Transfer", event.returnValues[0], event.returnValues[1], BigNumber.from(event.returnValues[2]));
            }
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

    public async sendToken(toChain: BigNumberish, receiver: string, amount: BigNumberish) {
        await this.runWalletMethod("sendToken", toChain, receiver, amount, constants.AddressZero);
    }

    public async sendedAmounts(sender: string, toChainId: BigNumberish, receiver: string, sendingId: BigNumberish): Promise<BigNumber> {
        return BigNumber.from((await this.runMethod("sendingData", sender, toChainId, receiver, sendingId))[0]);
    }

    public async sendingBlock(sender: string, toChainId: BigNumberish, receiver: string, sendingId: BigNumberish): Promise<BigNumber> {
        return BigNumber.from((await this.runMethod("sendingData", sender, toChainId, receiver, sendingId))[1]);
    }

    public async sendingCounts(sender: string, toChainId: BigNumberish, receiver: string): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("sendingCounts", sender, toChainId, receiver));
    }

    public async receiveToken(sender: string, fromChain: BigNumberish, receiver: string, amount: BigNumberish, sendingId: BigNumberish, isFeePayed: boolean,
        vs: number[],
        rs: string[],
        ss: string[],
    ) {
        await this.runWalletMethod("receiveToken", sender, fromChain, receiver, amount, sendingId, isFeePayed, constants.AddressZero, vs, rs, ss);
    }

    public async isTokenReceived(sender: string, fromChain: BigNumberish, receiver: string, sendingId: BigNumberish): Promise<boolean> {
        return await this.runMethod("isTokenReceived", sender, fromChain, receiver, sendingId);
    }
}

export default new KAPMReservoirContract();
