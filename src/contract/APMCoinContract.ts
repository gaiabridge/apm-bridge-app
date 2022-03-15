import IERC20Artifact from "./abi/artifacts/@openzeppelin/contracts/token/ERC20/IERC20.sol/IERC20.json";
import ERC20Contract from "./ethereum-standard/ERC20Contract";

class APMCoinContract extends ERC20Contract<any> {

    constructor() {
        super("0xc8c424b91d8ce0137bab4b832b7f7d154156ba6c", IERC20Artifact.abi, []);
    }
}

export default new APMCoinContract();
