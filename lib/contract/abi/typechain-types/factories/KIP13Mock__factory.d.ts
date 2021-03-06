import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { KIP13Mock, KIP13MockInterface } from "../KIP13Mock";
declare type KIP13MockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class KIP13Mock__factory extends ContractFactory {
    constructor(...args: KIP13MockConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<KIP13Mock>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): KIP13Mock;
    connect(signer: Signer): KIP13Mock__factory;
    static readonly contractName: "KIP13Mock";
    readonly contractName: "KIP13Mock";
    static readonly bytecode = "0x608060405261001a6301ffc9a760e01b61001f60201b60201c565b6100ed565b7fffffffff0000000000000000000000000000000000000000000000000000000080821614156100b057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f4b495031333a20696e76616c696420696e746572666163652069640000000000604482015290519081900360640190fd5b7fffffffff00000000000000000000000000000000000000000000000000000000166000908152602081905260409020805460ff19166001179055565b61017d806100fc6000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806301ffc9a71461003b578063214cdb8014610076575b600080fd5b6100626004803603602081101561005157600080fd5b50356001600160e01b03191661009f565b604080519115158252519081900360200190f35b61009d6004803603602081101561008c57600080fd5b50356001600160e01b0319166100be565b005b6001600160e01b03191660009081526020819052604090205460ff1690565b6100c7816100ca565b50565b6001600160e01b0319808216141561012c5760408051600160e51b62461bcd02815260206004820152601b60248201527f4b495031333a20696e76616c696420696e746572666163652069640000000000604482015290519081900360640190fd5b6001600160e01b0319166000908152602081905260409020805460ff1916600117905556fea165627a7a72305820c3a3943234faf4540f30c058449127f59fa8c06f24eb914332b7901c1e52cae10029";
    static readonly abi: {
        constant: boolean;
        inputs: {
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            name: string;
            type: string;
        }[];
        payable: boolean;
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): KIP13MockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): KIP13Mock;
}
export {};
//# sourceMappingURL=KIP13Mock__factory.d.ts.map