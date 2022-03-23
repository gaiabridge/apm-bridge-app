import KAPMCoinArtifact from "./abi/artifacts/contracts/KAPMCoin.sol/KAPMCoin.json";
import KIP7Contract from "./klaytn-standard/KIP7Contract";

class KAPMCoinContract extends KIP7Contract {

    constructor() {
        super("0x1c70233b082b38aabccd4524418a26e81b8378a4", KAPMCoinArtifact.abi);
    }
}

export default new KAPMCoinContract();
