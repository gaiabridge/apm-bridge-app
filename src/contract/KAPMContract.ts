import { BigNumber } from "ethers";
import Config from "../Config";
import Klaytn from "../klaytn/Klaytn";
import KAPMCoinArtifact from "./abi/artifacts/contracts/KAPMCoin.sol/KAPMCoin.json";
import KIP7Contract from "./klaytn-standard/KIP7Contract";

class KAPMCoinContract extends KIP7Contract {

    constructor() {
        super(Config.contracts.KAPMCoin, KAPMCoinArtifact.abi);
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
            const approvalEvents = await this.getApprovalEvents(prevBlock, currentBlock);
            for (const event of approvalEvents) {
                this.fireEvent("Approval", event.returnValues[0], event.returnValues[1], BigNumber.from(event.returnValues[2]));
            }
            prevBlock = currentBlock + 1;
        }, 2000);
    }
}

export default new KAPMCoinContract();
