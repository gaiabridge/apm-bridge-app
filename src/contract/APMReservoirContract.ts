import { BigNumber, BigNumberish } from "@ethersproject/bignumber";
import { constants } from "ethers";
import EthereumWallet from "../ethereum/EthereumWallet";
import APMReservoirArtifact from "./abi/artifacts/contracts/APMReservoir.sol/APMReservoir.json";
import APMCoinContract from "./APMCoinContract";
import EthereumContract from "./EthereumContract";
import GaiaBridgeInterface from "./GaiaBridgeInterface";

class APMReservoirContract extends EthereumContract<any> implements GaiaBridgeInterface {

    constructor() {
        super("0xa6eb2d8d059804bd7f2ac7579ceaeadabb921eaa", APMReservoirArtifact.abi, [
            "AddSigner",
            "RemoveSigner",
            "SendToken",
            "ReceiveToken",
        ]);
        APMCoinContract.toss("Transfer", this);
        EthereumWallet.toss("connect", this);
    }

    public async balanceOf(owner: string): Promise<BigNumber> {
        return await APMCoinContract.balanceOf(owner);
    }

    public async loadAddress(): Promise<string | undefined> {
        return await EthereumWallet.loadAddress();
    }

    public async connect() {
        await EthereumWallet.connect();
    }

    public addTokenToWallet() {
        EthereumWallet.addToken(APMCoinContract.address, "APM", 18, "https://apm-test.gaiabridge.com/images/shared/icn/icn-apmcoin.png");
    }

    public async sendToken(toChain: BigNumberish, receiver: string, amount: BigNumberish) {
        const owner = await EthereumWallet.loadAddress();
        if (owner !== undefined) {
            if ((await APMCoinContract.allowance(owner, this.address)).lt(amount)) {
                await APMCoinContract.approve(this.address, constants.MaxUint256);
            } else {
                const contract = await this.connectAndGetWalletContract();
                await contract?.sendToken(toChain, receiver, amount, constants.AddressZero);
            }
        }
    }

    public async sendedAmounts(sender: string, toChainId: BigNumberish, receiver: string, sendingId: BigNumberish): Promise<BigNumber> {
        return (await this.contract.sendingData(sender, toChainId, receiver, sendingId))[0];
    }

    public async sendingCounts(sender: string, toChainId: BigNumberish, receiver: string): Promise<BigNumber> {
        return await this.contract.sendingCounts(sender, toChainId, receiver);
    }

    public async receiveToken(sender: string, fromChain: BigNumberish, receiver: string, amount: BigNumberish, sendingId: BigNumberish, isFeePayed: boolean,
        vs: number[],
        rs: string[],
        ss: string[],
    ) {
        const contract = await this.connectAndGetWalletContract();
        await contract?.receiveToken(sender, fromChain, receiver, amount, sendingId, constants.AddressZero, isFeePayed, vs, rs, ss);
    }

    public async isTokenReceived(sender: string, fromChain: BigNumberish, receiver: string, sendingId: BigNumberish): Promise<boolean> {
        return await this.contract.isTokenReceived(sender, fromChain, receiver, sendingId);
    }

    public async getTransferEvents(to: string, startBlock: number, endBlock: number) {
        const filter = this.contract.filters.Transfer(null, to, null);
        return await this.contract.queryFilter(filter, startBlock, endBlock);
    }
}

export default new APMReservoirContract();
