import { BigNumber, BigNumberish } from "@ethersproject/bignumber";
import { constants } from "ethers";
import Config from "../Config";
import EthereumWallet from "../ethereum/EthereumWallet";
import APMReservoirArtifact from "./abi/artifacts/contracts/APMReservoir.sol/APMReservoir.json";
import APMCoinContract from "./APMCoinContract";
import EthereumContract from "./EthereumContract";
import GaiaBridgeInterface from "./GaiaBridgeInterface";

class APMReservoirContract extends EthereumContract<any> implements GaiaBridgeInterface {

    constructor() {
        super(Config.contracts.APMReservoir, APMReservoirArtifact.abi, [
            "AddSigner",
            "RemoveSigner",
            "SendToken",
            "ReceiveToken",
        ]);
        APMCoinContract.toss("Transfer", this);
        APMCoinContract.toss("Approval", this);
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
        EthereumWallet.addToken(APMCoinContract.address, "APM", 18, "https://bridge.apm-coin.com/images/shared/icn/icn-apmcoin-256.png");
    }

    public async sendToken(toChain: BigNumberish, receiver: string, amount: BigNumberish, data: string) {
        const owner = await EthereumWallet.loadAddress();
        if (owner !== undefined) {
            if ((await APMCoinContract.allowance(owner, this.address)).lt(amount)) {
                await APMCoinContract.approve(this.address, constants.MaxUint256);
            } else {
                const contract = await this.connectAndGetWalletContract();
                await contract?.sendToken(toChain, receiver, amount, data);
            }
        }
    }

    public async sendingData(sender: string, toChainId: BigNumberish, receiver: string, sendingId: BigNumberish): Promise<{
        amount: BigNumber,
        atBlock: BigNumber,
        isFeePayed: boolean,
        protocolFee: BigNumber,
        senderDiscountRate: BigNumber,
    }> {
        const result = await this.contract.sendingData(sender, toChainId, receiver, sendingId);
        return {
            amount: BigNumber.from(result[0]),
            atBlock: BigNumber.from(result[1]),
            isFeePayed: result[2],
            protocolFee: BigNumber.from(result[3]),
            senderDiscountRate: BigNumber.from(result[4]),
        };
    }

    public async sendingCounts(sender: string, toChainId: BigNumberish, receiver: string): Promise<BigNumber> {
        return await this.contract.sendingCounts(sender, toChainId, receiver);
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
        const contract = await this.connectAndGetWalletContract();
        await contract?.receiveToken(sender, fromChainId, receiver, amount, sendingId, isFeePayed, protocolFee, senderDiscountRate, data, vs, rs, ss);
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
