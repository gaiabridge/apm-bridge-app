import KAPMArtifact from "./abi/artifacts/contracts/KAPM.sol/KAPM.json";
import KIP7Contract from "./klaytn-standard/KIP7Contract";

class KAPMContract extends KIP7Contract {

    constructor() {
        super("0x1c70233b082b38aabccd4524418a26e81b8378a4", KAPMArtifact.abi);
    }
}

export default new KAPMContract();
