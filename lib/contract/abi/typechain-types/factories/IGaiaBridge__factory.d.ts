import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IGaiaBridge, IGaiaBridgeInterface } from "../IGaiaBridge";
export declare class IGaiaBridge__factory {
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): IGaiaBridgeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IGaiaBridge;
}
//# sourceMappingURL=IGaiaBridge__factory.d.ts.map