import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface KIP17ReceiverMockInterface extends utils.Interface {
    contractName: "KIP17ReceiverMock";
    functions: {
        "onKIP17Received(address,address,uint256,bytes)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "onKIP17Received", values: [string, string, BigNumberish, BytesLike]): string;
    decodeFunctionResult(functionFragment: "onKIP17Received", data: BytesLike): Result;
    events: {
        "Received(address,address,uint256,bytes,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Received"): EventFragment;
}
export declare type ReceivedEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    string,
    BigNumber
], {
    operator: string;
    from: string;
    tokenId: BigNumber;
    data: string;
    gas: BigNumber;
}>;
export declare type ReceivedEventFilter = TypedEventFilter<ReceivedEvent>;
export interface KIP17ReceiverMock extends BaseContract {
    contractName: "KIP17ReceiverMock";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: KIP17ReceiverMockInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        onKIP17Received(operator: string, from: string, tokenId: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    onKIP17Received(operator: string, from: string, tokenId: BigNumberish, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        onKIP17Received(operator: string, from: string, tokenId: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "Received(address,address,uint256,bytes,uint256)"(operator?: null, from?: null, tokenId?: null, data?: null, gas?: null): ReceivedEventFilter;
        Received(operator?: null, from?: null, tokenId?: null, data?: null, gas?: null): ReceivedEventFilter;
    };
    estimateGas: {
        onKIP17Received(operator: string, from: string, tokenId: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        onKIP17Received(operator: string, from: string, tokenId: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=KIP17ReceiverMock.d.ts.map