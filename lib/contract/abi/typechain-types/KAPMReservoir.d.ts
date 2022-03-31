import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface KAPMReservoirInterface extends utils.Interface {
    contractName: "KAPMReservoir";
    functions: {
        "receiveToken(address,uint256,address,uint256,uint256,bool,address,uint8[],bytes32[],bytes32[])": FunctionFragment;
        "quorum()": FunctionFragment;
        "signerIndex(address)": FunctionFragment;
        "signers(uint256)": FunctionFragment;
        "signersLength()": FunctionFragment;
        "addSigner(address,uint8[],bytes32[],bytes32[])": FunctionFragment;
        "sendingCounts(address,uint256,address)": FunctionFragment;
        "sendingData(address,uint256,address,uint256)": FunctionFragment;
        "updateFeeDB(address)": FunctionFragment;
        "feeDB()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "updateQuorum(uint256,uint8[],bytes32[],bytes32[])": FunctionFragment;
        "isSigner(address)": FunctionFragment;
        "removeSigner(address,uint8[],bytes32[],bytes32[])": FunctionFragment;
        "signingNonce()": FunctionFragment;
        "owner()": FunctionFragment;
        "isOwner()": FunctionFragment;
        "sendToken(uint256,address,uint256,address)": FunctionFragment;
        "isTokenReceived(address,uint256,address,uint256)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "token()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "receiveToken", values: [
        string,
        BigNumberish,
        string,
        BigNumberish,
        BigNumberish,
        boolean,
        string,
        BigNumberish[],
        BytesLike[],
        BytesLike[]
    ]): string;
    encodeFunctionData(functionFragment: "quorum", values?: undefined): string;
    encodeFunctionData(functionFragment: "signerIndex", values: [string]): string;
    encodeFunctionData(functionFragment: "signers", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "signersLength", values?: undefined): string;
    encodeFunctionData(functionFragment: "addSigner", values: [string, BigNumberish[], BytesLike[], BytesLike[]]): string;
    encodeFunctionData(functionFragment: "sendingCounts", values: [string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "sendingData", values: [string, BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "updateFeeDB", values: [string]): string;
    encodeFunctionData(functionFragment: "feeDB", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "updateQuorum", values: [BigNumberish, BigNumberish[], BytesLike[], BytesLike[]]): string;
    encodeFunctionData(functionFragment: "isSigner", values: [string]): string;
    encodeFunctionData(functionFragment: "removeSigner", values: [string, BigNumberish[], BytesLike[], BytesLike[]]): string;
    encodeFunctionData(functionFragment: "signingNonce", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "isOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "sendToken", values: [BigNumberish, string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "isTokenReceived", values: [string, BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    encodeFunctionData(functionFragment: "token", values?: undefined): string;
    decodeFunctionResult(functionFragment: "receiveToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quorum", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "signerIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "signers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "signersLength", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addSigner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendingCounts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendingData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateFeeDB", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "feeDB", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateQuorum", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isSigner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeSigner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "signingNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isTokenReceived", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
    events: {
        "AddSigner(address)": EventFragment;
        "RemoveSigner(address)": EventFragment;
        "UpdateFeeDB(address)": EventFragment;
        "UpdateQuorum(uint256)": EventFragment;
        "SendToken(address,uint256,address,uint256,uint256,bool)": EventFragment;
        "ReceiveToken(address,uint256,address,uint256,uint256)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AddSigner"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RemoveSigner"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdateFeeDB"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdateQuorum"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SendToken"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ReceiveToken"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}
export declare type AddSignerEvent = TypedEvent<[string], {
    signer: string;
}>;
export declare type AddSignerEventFilter = TypedEventFilter<AddSignerEvent>;
export declare type RemoveSignerEvent = TypedEvent<[string], {
    signer: string;
}>;
export declare type RemoveSignerEventFilter = TypedEventFilter<RemoveSignerEvent>;
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
export declare type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], {
    previousOwner: string;
    newOwner: string;
}>;
export declare type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface KAPMReservoir extends BaseContract {
    contractName: "KAPMReservoir";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: KAPMReservoirInterface;
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
        receiveToken(sender: string, fromChainId: BigNumberish, receiver: string, amount: BigNumberish, sendingId: BigNumberish, isFeePayed: boolean, nft: string, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        quorum(overrides?: CallOverrides): Promise<[BigNumber]>;
        signerIndex(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        signers(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        signersLength(overrides?: CallOverrides): Promise<[BigNumber]>;
        addSigner(signer: string, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        sendingCounts(sender: string, toChainId: BigNumberish, receiver: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        sendingData(arg0: string, arg1: BigNumberish, arg2: string, arg3: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            sendedAmount: BigNumber;
            sendingBlock: BigNumber;
        }>;
        updateFeeDB(newDB: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        feeDB(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        updateQuorum(newQuorum: BigNumberish, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        isSigner(signer: string, overrides?: CallOverrides): Promise<[boolean]>;
        removeSigner(signer: string, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        signingNonce(overrides?: CallOverrides): Promise<[BigNumber]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        isOwner(overrides?: CallOverrides): Promise<[boolean]>;
        sendToken(toChainId: BigNumberish, receiver: string, amount: BigNumberish, nft: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        isTokenReceived(arg0: string, arg1: BigNumberish, arg2: string, arg3: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        token(overrides?: CallOverrides): Promise<[string]>;
    };
    receiveToken(sender: string, fromChainId: BigNumberish, receiver: string, amount: BigNumberish, sendingId: BigNumberish, isFeePayed: boolean, nft: string, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    quorum(overrides?: CallOverrides): Promise<BigNumber>;
    signerIndex(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    signers(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    signersLength(overrides?: CallOverrides): Promise<BigNumber>;
    addSigner(signer: string, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    sendingCounts(sender: string, toChainId: BigNumberish, receiver: string, overrides?: CallOverrides): Promise<BigNumber>;
    sendingData(arg0: string, arg1: BigNumberish, arg2: string, arg3: BigNumberish, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        sendedAmount: BigNumber;
        sendingBlock: BigNumber;
    }>;
    updateFeeDB(newDB: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    feeDB(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    updateQuorum(newQuorum: BigNumberish, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    isSigner(signer: string, overrides?: CallOverrides): Promise<boolean>;
    removeSigner(signer: string, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    signingNonce(overrides?: CallOverrides): Promise<BigNumber>;
    owner(overrides?: CallOverrides): Promise<string>;
    isOwner(overrides?: CallOverrides): Promise<boolean>;
    sendToken(toChainId: BigNumberish, receiver: string, amount: BigNumberish, nft: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    isTokenReceived(arg0: string, arg1: BigNumberish, arg2: string, arg3: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    token(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        receiveToken(sender: string, fromChainId: BigNumberish, receiver: string, amount: BigNumberish, sendingId: BigNumberish, isFeePayed: boolean, nft: string, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: CallOverrides): Promise<void>;
        quorum(overrides?: CallOverrides): Promise<BigNumber>;
        signerIndex(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        signers(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
        signersLength(overrides?: CallOverrides): Promise<BigNumber>;
        addSigner(signer: string, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: CallOverrides): Promise<void>;
        sendingCounts(sender: string, toChainId: BigNumberish, receiver: string, overrides?: CallOverrides): Promise<BigNumber>;
        sendingData(arg0: string, arg1: BigNumberish, arg2: string, arg3: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            sendedAmount: BigNumber;
            sendingBlock: BigNumber;
        }>;
        updateFeeDB(newDB: string, overrides?: CallOverrides): Promise<void>;
        feeDB(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        updateQuorum(newQuorum: BigNumberish, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: CallOverrides): Promise<void>;
        isSigner(signer: string, overrides?: CallOverrides): Promise<boolean>;
        removeSigner(signer: string, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: CallOverrides): Promise<void>;
        signingNonce(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<string>;
        isOwner(overrides?: CallOverrides): Promise<boolean>;
        sendToken(toChainId: BigNumberish, receiver: string, amount: BigNumberish, nft: string, overrides?: CallOverrides): Promise<BigNumber>;
        isTokenReceived(arg0: string, arg1: BigNumberish, arg2: string, arg3: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
        token(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "AddSigner(address)"(signer?: null): AddSignerEventFilter;
        AddSigner(signer?: null): AddSignerEventFilter;
        "RemoveSigner(address)"(signer?: null): RemoveSignerEventFilter;
        RemoveSigner(signer?: null): RemoveSignerEventFilter;
        "UpdateFeeDB(address)"(newFeeDB?: null): UpdateFeeDBEventFilter;
        UpdateFeeDB(newFeeDB?: null): UpdateFeeDBEventFilter;
        "UpdateQuorum(uint256)"(newQuorum?: null): UpdateQuorumEventFilter;
        UpdateQuorum(newQuorum?: null): UpdateQuorumEventFilter;
        "SendToken(address,uint256,address,uint256,uint256,bool)"(sender?: string | null, toChainId?: BigNumberish | null, receiver?: string | null, amount?: null, sendingId?: null, isFeeCollected?: null): SendTokenEventFilter;
        SendToken(sender?: string | null, toChainId?: BigNumberish | null, receiver?: string | null, amount?: null, sendingId?: null, isFeeCollected?: null): SendTokenEventFilter;
        "ReceiveToken(address,uint256,address,uint256,uint256)"(sender?: string | null, fromChainId?: BigNumberish | null, receiver?: string | null, amount?: null, sendingId?: null): ReceiveTokenEventFilter;
        ReceiveToken(sender?: string | null, fromChainId?: BigNumberish | null, receiver?: string | null, amount?: null, sendingId?: null): ReceiveTokenEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
    };
    estimateGas: {
        receiveToken(sender: string, fromChainId: BigNumberish, receiver: string, amount: BigNumberish, sendingId: BigNumberish, isFeePayed: boolean, nft: string, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        quorum(overrides?: CallOverrides): Promise<BigNumber>;
        signerIndex(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        signers(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        signersLength(overrides?: CallOverrides): Promise<BigNumber>;
        addSigner(signer: string, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        sendingCounts(sender: string, toChainId: BigNumberish, receiver: string, overrides?: CallOverrides): Promise<BigNumber>;
        sendingData(arg0: string, arg1: BigNumberish, arg2: string, arg3: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        updateFeeDB(newDB: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        feeDB(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        updateQuorum(newQuorum: BigNumberish, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        isSigner(signer: string, overrides?: CallOverrides): Promise<BigNumber>;
        removeSigner(signer: string, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        signingNonce(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        isOwner(overrides?: CallOverrides): Promise<BigNumber>;
        sendToken(toChainId: BigNumberish, receiver: string, amount: BigNumberish, nft: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        isTokenReceived(arg0: string, arg1: BigNumberish, arg2: string, arg3: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        token(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        receiveToken(sender: string, fromChainId: BigNumberish, receiver: string, amount: BigNumberish, sendingId: BigNumberish, isFeePayed: boolean, nft: string, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        quorum(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        signerIndex(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        signers(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        signersLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addSigner(signer: string, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        sendingCounts(sender: string, toChainId: BigNumberish, receiver: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sendingData(arg0: string, arg1: BigNumberish, arg2: string, arg3: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        updateFeeDB(newDB: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        feeDB(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        updateQuorum(newQuorum: BigNumberish, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        isSigner(signer: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeSigner(signer: string, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        signingNonce(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sendToken(toChainId: BigNumberish, receiver: string, amount: BigNumberish, nft: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        isTokenReceived(arg0: string, arg1: BigNumberish, arg2: string, arg3: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=KAPMReservoir.d.ts.map