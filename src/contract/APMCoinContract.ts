import Config from "../Config";
import IERC20Artifact from "./abi/artifacts/@openzeppelin/contracts/token/ERC20/IERC20.sol/IERC20.json";
import ERC20Contract from "./ethereum-standard/ERC20Contract";

class APMCoinContract extends ERC20Contract<any> {

    constructor() {
        super(Config.contracts.APMCoin, IERC20Artifact.abi, ["Approval"]);
    }
}

export default new APMCoinContract();
