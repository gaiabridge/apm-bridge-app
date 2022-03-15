import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IGaiaBridgeInterface extends utils.Interface {
    contractName: "IGaiaBridge";
    functions: {
        "feeDB()": FunctionFragment;
        "isSigner(address)": FunctionFragment;
        "isTokenReceived(address,uint256,address,uint256)": FunctionFragment;
        "quorum()": FunctionFragment;
        "receiveToken(address,uint256,address,uint256,uint256,bool,uint8[],bytes32[],bytes32[])": FunctionFragment;
        "sendToken(uint256,address,uint256)": FunctionFragment;
        "sendedAmounts(address,uint256,address,uint256)": FunctionFragment;
        "sendingCounts(address,uint256,address)": FunctionFragment;
        "signerIndex(address)": FunctionFragment;
        "signers(uint256)": FunctionFragment;
        "signersLength()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "feeDB", values?: undefined): string;
    encodeFunctionData(functionFragment: "isSigner", values: [string]): string;
    encodeFunctionData(functionFragment: "isTokenReceived", values: [string, BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "quorum", values?: undefined): string;
    encodeFunctionData(functionFragment: "receiveToken", values: [
        string,
        BigNumberish,
        string,
        BigNumberish,
        BigNumberish,
        boolean,
        BigNumberish[],
        BytesLike[],
        BytesLike[]
    ]): string;
    encodeFunctionData(functionFragment: "sendToken", values: [BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "sendedAmounts", values: [string, BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "sendingCounts", values: [string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "signerIndex", values: [string]): string;
    encodeFunctionData(functionFragment: "signers", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "signersLength", values?: undefined): string;
    decodeFunctionResult(functionFragment: "feeDB", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isSigner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isTokenReceived", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quorum", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "receiveToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendedAmounts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendingCounts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "signerIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "signers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "signersLength", data: BytesLike): Result;
    events: {
        "AddSigner(address)": EventFragment;
        "ReceiveToken(address,uint256,address,uint256,uint256)": EventFragment;
        "RemoveSigner(address)": EventFragment;
        "SendToken(address,uint256,address,uint256,uint256,bool)": EventFragment;
        "UpdateFeeDB(address)": EventFragment;
        "UpdateQuorum(uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AddSigner"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ReceiveToken"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RemoveSigner"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SendToken"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdateFeeDB"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdateQuorum"): EventFragment;
}
export declare type AddSignerEvent = TypedEvent<[string], {
    signer: string;
}>;
export declare type AddSignerEventFilter = TypedEventFilter<AddSignerEvent>;
export declare type ReceiveTokenEvent = TypedEvent<[
    string,
    BigNumber,
    string,
    BigNumber,
    BigNumber
], {
    sender: string;
    fromChainId: BigNumber;
    receiver: string;
    amount: BigNumber;
    sendingId: BigNumber;
}>;
export declare type ReceiveTokenEventFilter = TypedEventFilter<ReceiveTokenEvent>;
export declare type RemoveSignerEvent = TypedEvent<[string], {
    signer: string;
}>;
export declare type RemoveSignerEventFilter = TypedEventFilter<RemoveSignerEvent>;
export declare type SendTokenEvent = TypedEvent<[
    string,
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    boolean
], {
    sender: string;
    toChainId: BigNumber;
    receiver: string;
    amount: BigNumber;
    sendingId: BigNumber;
    isFeeCollected: boolean;
}>;
export declare type SendTokenEventFilter = TypedEventFilter<SendTokenEvent>;
export declare type UpdateFeeDBEvent = TypedEvent<[string], {
    newFeeDB: string;
}>;
export declare type UpdateFeeDBEventFilter = TypedEventFilter<UpdateFeeDBEvent>;
export declare type UpdateQuorumEvent = TypedEvent<[
    BigNumber
], {
    newQuorum: BigNumber;
}>;
export declare type UpdateQuorumEventFilter = TypedEventFilter<UpdateQuorumEvent>;
export interface IGaiaBridge extends BaseContract {
    contractName: "IGaiaBridge";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IGaiaBridgeInterface;
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
        feeDB(overrides?: CallOverrides): Promise<[string]>;
        isSigner(signer: string, overrides?: CallOverrides): Promise<[boolean]>;
        isTokenReceived(sender: string, fromChainId: BigNumberish, receiver: string, sendingId: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        quorum(overrides?: CallOverrides): Promise<[BigNumber]>;
        receiveToken(sender: string, fromChainId: BigNumberish, receiver: string, amount: BigNumberish, sendingId: BigNumberish, isFeePayed: boolean, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        sendToken(toChainId: BigNumberish, receiver: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        sendedAmounts(sender: string, toChainId: BigNumberish, receiver: string, sendingId: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        sendingCounts(sender: string, toChainId: BigNumberish, receiver: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        signerIndex(signer: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        signers(id: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        signersLength(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    feeDB(overrides?: CallOverrides): Promise<string>;
    isSigner(signer: string, overrides?: CallOverrides): Promise<boolean>;
    isTokenReceived(sender: string, fromChainId: BigNumberish, receiver: string, sendingId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    quorum(overrides?: CallOverrides): Promise<BigNumber>;
    receiveToken(sender: string, fromChainId: BigNumberish, receiver: string, amount: BigNumberish, sendingId: BigNumberish, isFeePayed: boolean, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    sendToken(toChainId: BigNumberish, receiver: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    sendedAmounts(sender: string, toChainId: BigNumberish, receiver: string, sendingId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    sendingCounts(sender: string, toChainId: BigNumberish, receiver: string, overrides?: CallOverrides): Promise<BigNumber>;
    signerIndex(signer: string, overrides?: CallOverrides): Promise<BigNumber>;
    signers(id: BigNumberish, overrides?: CallOverrides): Promise<string>;
    signersLength(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        feeDB(overrides?: CallOverrides): Promise<string>;
        isSigner(signer: string, overrides?: CallOverrides): Promise<boolean>;
        isTokenReceived(sender: string, fromChainId: BigNumberish, receiver: string, sendingId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        quorum(overrides?: CallOverrides): Promise<BigNumber>;
        receiveToken(sender: string, fromChainId: BigNumberish, receiver: string, amount: BigNumberish, sendingId: BigNumberish, isFeePayed: boolean, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: CallOverrides): Promise<void>;
        sendToken(toChainId: BigNumberish, receiver: string, amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        sendedAmounts(sender: string, toChainId: BigNumberish, receiver: string, sendingId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        sendingCounts(sender: string, toChainId: BigNumberish, receiver: string, overrides?: CallOverrides): Promise<BigNumber>;
        signerIndex(signer: string, overrides?: CallOverrides): Promise<BigNumber>;
        signers(id: BigNumberish, overrides?: CallOverrides): Promise<string>;
        signersLength(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "AddSigner(address)"(signer?: null): AddSignerEventFilter;
        AddSigner(signer?: null): AddSignerEventFilter;
        "ReceiveToken(address,uint256,address,uint256,uint256)"(sender?: string | null, fromChainId?: BigNumberish | null, receiver?: string | null, amount?: null, sendingId?: null): ReceiveTokenEventFilter;
        ReceiveToken(sender?: string | null, fromChainId?: BigNumberish | null, receiver?: string | null, amount?: null, sendingId?: null): ReceiveTokenEventFilter;
        "RemoveSigner(address)"(signer?: null): RemoveSignerEventFilter;
        RemoveSigner(signer?: null): RemoveSignerEventFilter;
        "SendToken(address,uint256,address,uint256,uint256,bool)"(sender?: string | null, toChainId?: BigNumberish | null, receiver?: string | null, amount?: null, sendingId?: null, isFeeCollected?: null): SendTokenEventFilter;
        SendToken(sender?: string | null, toChainId?: BigNumberish | null, receiver?: string | null, amount?: null, sendingId?: null, isFeeCollected?: null): SendTokenEventFilter;
        "UpdateFeeDB(address)"(newFeeDB?: null): UpdateFeeDBEventFilter;
        UpdateFeeDB(newFeeDB?: null): UpdateFeeDBEventFilter;
        "UpdateQuorum(uint256)"(newQuorum?: null): UpdateQuorumEventFilter;
        UpdateQuorum(newQuorum?: null): UpdateQuorumEventFilter;
    };
    estimateGas: {
        feeDB(overrides?: CallOverrides): Promise<BigNumber>;
        isSigner(signer: string, overrides?: CallOverrides): Promise<BigNumber>;
        isTokenReceived(sender: string, fromChainId: BigNumberish, receiver: string, sendingId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        quorum(overrides?: CallOverrides): Promise<BigNumber>;
        receiveToken(sender: string, fromChainId: BigNumberish, receiver: string, amount: BigNumberish, sendingId: BigNumberish, isFeePayed: boolean, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        sendToken(toChainId: BigNumberish, receiver: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        sendedAmounts(sender: string, toChainId: BigNumberish, receiver: string, sendingId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        sendingCounts(sender: string, toChainId: BigNumberish, receiver: string, overrides?: CallOverrides): Promise<BigNumber>;
        signerIndex(signer: string, overrides?: CallOverrides): Promise<BigNumber>;
        signers(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        signersLength(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        feeDB(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isSigner(signer: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isTokenReceived(sender: string, fromChainId: BigNumberish, receiver: string, sendingId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        quorum(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        receiveToken(sender: string, fromChainId: BigNumberish, receiver: string, amount: BigNumberish, sendingId: BigNumberish, isFeePayed: boolean, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        sendToken(toChainId: BigNumberish, receiver: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        sendedAmounts(sender: string, toChainId: BigNumberish, receiver: string, sendingId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sendingCounts(sender: string, toChainId: BigNumberish, receiver: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        signerIndex(signer: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        signers(id: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        signersLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=IGaiaBridge.d.ts.map