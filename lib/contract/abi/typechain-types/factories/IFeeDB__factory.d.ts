import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IFeeDB, IFeeDBInterface } from "../IFeeDB";
export declare class IFeeDB__factory {
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
    static createInterface(): IFeeDBInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IFeeDB;
}
//# sourceMappingURL=IFeeDB__factory.d.ts.map