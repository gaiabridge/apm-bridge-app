import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface APMReservoirInterface extends utils.Interface {
    contractName: "APMReservoir";
    functions: {
        "addSigner(address,uint8[],bytes32[],bytes32[])": FunctionFragment;
        "feeDB()": FunctionFragment;
        "isSigner(address)": FunctionFragment;
        "isTokenReceived(address,uint256,address,uint256)": FunctionFragment;
        "owner()": FunctionFragment;
        "quorum()": FunctionFragment;
        "receiveToken(address,uint256,address,uint256,uint256,bool,uint8[],bytes32[],bytes32[])": FunctionFragment;
        "removeSigner(address,uint8[],bytes32[],bytes32[])": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "sendToken(uint256,address,uint256)": FunctionFragment;
        "sendedAmounts(address,uint256,address,uint256)": FunctionFragment;
        "sendingCounts(address,uint256,address)": FunctionFragment;
        "signerIndex(address)": FunctionFragment;
        "signers(uint256)": FunctionFragment;
        "signersLength()": FunctionFragment;
        "signingNonce()": FunctionFragment;
        "token()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "updateFeeDB(address)": FunctionFragment;
        "updateQuorum(uint256,uint8[],bytes32[],bytes32[])": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "addSigner", values: [string, BigNumberish[], BytesLike[], BytesLike[]]): string;
    encodeFunctionData(functionFragment: "feeDB", values?: undefined): string;
    encodeFunctionData(functionFragment: "isSigner", values: [string]): string;
    encodeFunctionData(functionFragment: "isTokenReceived", values: [string, BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
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
    encodeFunctionData(functionFragment: "removeSigner", values: [string, BigNumberish[], BytesLike[], BytesLike[]]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "sendToken", values: [BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "sendedAmounts", values: [string, BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "sendingCounts", values: [string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "signerIndex", values: [string]): string;
    encodeFunctionData(functionFragment: "signers", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "signersLength", values?: undefined): string;
    encodeFunctionData(functionFragment: "signingNonce", values?: undefined): string;
    encodeFunctionData(functionFragment: "token", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    encodeFunctionData(functionFragment: "updateFeeDB", values: [string]): string;
    encodeFunctionData(functionFragment: "updateQuorum", values: [BigNumberish, BigNumberish[], BytesLike[], BytesLike[]]): string;
    decodeFunctionResult(functionFragment: "addSigner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "feeDB", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isSigner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isTokenReceived", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quorum", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "receiveToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeSigner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendedAmounts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendingCounts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "signerIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "signers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "signersLength", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "signingNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateFeeDB", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateQuorum", data: BytesLike): Result;
    events: {
        "AddSigner(address)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "ReceiveToken(address,uint256,address,uint256,uint256)": EventFragment;
        "RemoveSigner(address)": EventFragment;
        "SendToken(address,uint256,address,uint256,uint256,bool)": EventFragment;
        "UpdateFeeDB(address)": EventFragment;
        "UpdateQuorum(uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AddSigner"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
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
export declare type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], {
    previousOwner: string;
    newOwner: string;
}>;
export declare type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
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
export interface APMReservoir extends BaseContract {
    contractName: "APMReservoir";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: APMReservoirInterface;
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
        addSigner(signer: string, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        feeDB(overrides?: CallOverrides): Promise<[string]>;
        isSigner(signer: string, overrides?: CallOverrides): Promise<[boolean]>;
        isTokenReceived(arg0: string, arg1: BigNumberish, arg2: string, arg3: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        quorum(overrides?: CallOverrides): Promise<[BigNumber]>;
        receiveToken(sender: string, fromChainId: BigNumberish, receiver: string, amount: BigNumberish, sendingId: BigNumberish, isFeePayed: boolean, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        removeSigner(signer: string, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        sendToken(toChainId: BigNumberish, receiver: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        sendedAmounts(arg0: string, arg1: BigNumberish, arg2: string, arg3: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        sendingCounts(sender: string, toChainId: BigNumberish, receiver: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        signerIndex(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        signers(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        signersLength(overrides?: CallOverrides): Promise<[BigNumber]>;
        signingNonce(overrides?: CallOverrides): Promise<[BigNumber]>;
        token(overrides?: CallOverrides): Promise<[string]>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        updateFeeDB(newDB: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        updateQuorum(newQuorum: BigNumberish, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    addSigner(signer: string, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    feeDB(overrides?: CallOverrides): Promise<string>;
    isSigner(signer: string, overrides?: CallOverrides): Promise<boolean>;
    isTokenReceived(arg0: string, arg1: BigNumberish, arg2: string, arg3: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    owner(overrides?: CallOverrides): Promise<string>;
    quorum(overrides?: CallOverrides): Promise<BigNumber>;
    receiveToken(sender: string, fromChainId: BigNumberish, receiver: string, amount: BigNumberish, sendingId: BigNumberish, isFeePayed: boolean, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    removeSigner(signer: string, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    renounceOwnership(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    sendToken(toChainId: BigNumberish, receiver: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    sendedAmounts(arg0: string, arg1: BigNumberish, arg2: string, arg3: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    sendingCounts(sender: string, toChainId: BigNumberish, receiver: string, overrides?: CallOverrides): Promise<BigNumber>;
    signerIndex(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    signers(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    signersLength(overrides?: CallOverrides): Promise<BigNumber>;
    signingNonce(overrides?: CallOverrides): Promise<BigNumber>;
    token(overrides?: CallOverrides): Promise<string>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    updateFeeDB(newDB: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    updateQuorum(newQuorum: BigNumberish, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addSigner(signer: string, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: CallOverrides): Promise<void>;
        feeDB(overrides?: CallOverrides): Promise<string>;
        isSigner(signer: string, overrides?: CallOverrides): Promise<boolean>;
        isTokenReceived(arg0: string, arg1: BigNumberish, arg2: string, arg3: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        owner(overrides?: CallOverrides): Promise<string>;
        quorum(overrides?: CallOverrides): Promise<BigNumber>;
        receiveToken(sender: string, fromChainId: BigNumberish, receiver: string, amount: BigNumberish, sendingId: BigNumberish, isFeePayed: boolean, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: CallOverrides): Promise<void>;
        removeSigner(signer: string, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: CallOverrides): Promise<void>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        sendToken(toChainId: BigNumberish, receiver: string, amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        sendedAmounts(arg0: string, arg1: BigNumberish, arg2: string, arg3: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        sendingCounts(sender: string, toChainId: BigNumberish, receiver: string, overrides?: CallOverrides): Promise<BigNumber>;
        signerIndex(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        signers(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
        signersLength(overrides?: CallOverrides): Promise<BigNumber>;
        signingNonce(overrides?: CallOverrides): Promise<BigNumber>;
        token(overrides?: CallOverrides): Promise<string>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
        updateFeeDB(newDB: string, overrides?: CallOverrides): Promise<void>;
        updateQuorum(newQuorum: BigNumberish, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AddSigner(address)"(signer?: null): AddSignerEventFilter;
        AddSigner(signer?: null): AddSignerEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
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
        addSigner(signer: string, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        feeDB(overrides?: CallOverrides): Promise<BigNumber>;
        isSigner(signer: string, overrides?: CallOverrides): Promise<BigNumber>;
        isTokenReceived(arg0: string, arg1: BigNumberish, arg2: string, arg3: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        quorum(overrides?: CallOverrides): Promise<BigNumber>;
        receiveToken(sender: string, fromChainId: BigNumberish, receiver: string, amount: BigNumberish, sendingId: BigNumberish, isFeePayed: boolean, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        removeSigner(signer: string, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        sendToken(toChainId: BigNumberish, receiver: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        sendedAmounts(arg0: string, arg1: BigNumberish, arg2: string, arg3: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        sendingCounts(sender: string, toChainId: BigNumberish, receiver: string, overrides?: CallOverrides): Promise<BigNumber>;
        signerIndex(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        signers(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        signersLength(overrides?: CallOverrides): Promise<BigNumber>;
        signingNonce(overrides?: CallOverrides): Promise<BigNumber>;
        token(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        updateFeeDB(newDB: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        updateQuorum(newQuorum: BigNumberish, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addSigner(signer: string, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        feeDB(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isSigner(signer: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isTokenReceived(arg0: string, arg1: BigNumberish, arg2: string, arg3: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        quorum(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        receiveToken(sender: string, fromChainId: BigNumberish, receiver: string, amount: BigNumberish, sendingId: BigNumberish, isFeePayed: boolean, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        removeSigner(signer: string, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        sendToken(toChainId: BigNumberish, receiver: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        sendedAmounts(arg0: string, arg1: BigNumberish, arg2: string, arg3: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sendingCounts(sender: string, toChainId: BigNumberish, receiver: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        signerIndex(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        signers(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        signersLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        signingNonce(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        updateFeeDB(newDB: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        updateQuorum(newQuorum: BigNumberish, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=APMReservoir.d.ts.map