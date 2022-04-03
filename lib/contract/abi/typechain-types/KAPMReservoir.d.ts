import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface KAPMReservoirInterface extends utils.Interface {
    contractName: "KAPMReservoir";
    functions: {
        "addSigner(address,uint8[],bytes32[],bytes32[])": FunctionFragment;
        "feeDB()": FunctionFragment;
        "getSigners()": FunctionFragment;
        "isSigner(address)": FunctionFragment;
        "isTokenReceived(address,uint256,address,uint256)": FunctionFragment;
        "isValidChain(uint256)": FunctionFragment;
        "migrate(address,uint8[],bytes32[],bytes32[])": FunctionFragment;
        "quorum()": FunctionFragment;
        "receiveToken(address,uint256,address,uint256,uint256,bool,uint256,uint256,bytes,uint8[],bytes32[],bytes32[])": FunctionFragment;
        "removeSigner(address,uint8[],bytes32[],bytes32[])": FunctionFragment;
        "sendToken(uint256,address,uint256,bytes)": FunctionFragment;
        "sendingCounts(address,uint256,address)": FunctionFragment;
        "sendingData(address,uint256,address,uint256)": FunctionFragment;
        "setChainValidity(uint256,bool,uint8[],bytes32[],bytes32[])": FunctionFragment;
        "signersLength()": FunctionFragment;
        "signingNonce()": FunctionFragment;
        "token()": FunctionFragment;
        "updateFeeDB(address,uint8[],bytes32[],bytes32[])": FunctionFragment;
        "updateQuorum(uint256,uint8[],bytes32[],bytes32[])": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "addSigner", values: [string, BigNumberish[], BytesLike[], BytesLike[]]): string;
    encodeFunctionData(functionFragment: "feeDB", values?: undefined): string;
    encodeFunctionData(functionFragment: "getSigners", values?: undefined): string;
    encodeFunctionData(functionFragment: "isSigner", values: [string]): string;
    encodeFunctionData(functionFragment: "isTokenReceived", values: [string, BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "isValidChain", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "migrate", values: [string, BigNumberish[], BytesLike[], BytesLike[]]): string;
    encodeFunctionData(functionFragment: "quorum", values?: undefined): string;
    encodeFunctionData(functionFragment: "receiveToken", values: [
        string,
        BigNumberish,
        string,
        BigNumberish,
        BigNumberish,
        boolean,
        BigNumberish,
        BigNumberish,
        BytesLike,
        BigNumberish[],
        BytesLike[],
        BytesLike[]
    ]): string;
    encodeFunctionData(functionFragment: "removeSigner", values: [string, BigNumberish[], BytesLike[], BytesLike[]]): string;
    encodeFunctionData(functionFragment: "sendToken", values: [BigNumberish, string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "sendingCounts", values: [string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "sendingData", values: [string, BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setChainValidity", values: [BigNumberish, boolean, BigNumberish[], BytesLike[], BytesLike[]]): string;
    encodeFunctionData(functionFragment: "signersLength", values?: undefined): string;
    encodeFunctionData(functionFragment: "signingNonce", values?: undefined): string;
    encodeFunctionData(functionFragment: "token", values?: undefined): string;
    encodeFunctionData(functionFragment: "updateFeeDB", values: [string, BigNumberish[], BytesLike[], BytesLike[]]): string;
    encodeFunctionData(functionFragment: "updateQuorum", values: [BigNumberish, BigNumberish[], BytesLike[], BytesLike[]]): string;
    decodeFunctionResult(functionFragment: "addSigner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "feeDB", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSigners", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isSigner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isTokenReceived", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isValidChain", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "migrate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quorum", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "receiveToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeSigner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendingCounts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendingData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setChainValidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "signersLength", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "signingNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateFeeDB", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateQuorum", data: BytesLike): Result;
    events: {
        "AddSigner(address)": EventFragment;
        "Migrate(address)": EventFragment;
        "ReceiveToken(address,uint256,address,uint256,uint256)": EventFragment;
        "RemoveSigner(address)": EventFragment;
        "SendToken(address,uint256,address,uint256,uint256,bool,uint256,uint256)": EventFragment;
        "SetChainValidity(uint256,bool)": EventFragment;
        "TransferFee(address,address,uint256)": EventFragment;
        "UpdateFeeDB(address)": EventFragment;
        "UpdateQuorum(uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AddSigner"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Migrate"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ReceiveToken"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RemoveSigner"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SendToken"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetChainValidity"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TransferFee"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdateFeeDB"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdateQuorum"): EventFragment;
}
export declare type AddSignerEvent = TypedEvent<[string], {
    signer: string;
}>;
export declare type AddSignerEventFilter = TypedEventFilter<AddSignerEvent>;
export declare type MigrateEvent = TypedEvent<[string], {
    newReservoir: string;
}>;
export declare type MigrateEventFilter = TypedEventFilter<MigrateEvent>;
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
    boolean,
    BigNumber,
    BigNumber
], {
    sender: string;
    toChainId: BigNumber;
    receiver: string;
    amount: BigNumber;
    sendingId: BigNumber;
    isFeePayed: boolean;
    protocolFee: BigNumber;
    senderDiscountRate: BigNumber;
}>;
export declare type SendTokenEventFilter = TypedEventFilter<SendTokenEvent>;
export declare type SetChainValidityEvent = TypedEvent<[
    BigNumber,
    boolean
], {
    chainId: BigNumber;
    status: boolean;
}>;
export declare type SetChainValidityEventFilter = TypedEventFilter<SetChainValidityEvent>;
export declare type TransferFeeEvent = TypedEvent<[
    string,
    string,
    BigNumber
], {
    user: string;
    feeRecipient: string;
    amount: BigNumber;
}>;
export declare type TransferFeeEventFilter = TypedEventFilter<TransferFeeEvent>;
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
        addSigner(signer: string, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        feeDB(overrides?: CallOverrides): Promise<[string]>;
        getSigners(overrides?: CallOverrides): Promise<[string[]]>;
        isSigner(signer: string, overrides?: CallOverrides): Promise<[boolean]>;
        isTokenReceived(arg0: string, arg1: BigNumberish, arg2: string, arg3: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        isValidChain(arg0: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        migrate(newReservoir: string, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        quorum(overrides?: CallOverrides): Promise<[BigNumber]>;
        receiveToken(sender: string, fromChainId: BigNumberish, receiver: string, amount: BigNumberish, sendingId: BigNumberish, isFeePayed: boolean, protocolFee: BigNumberish, senderDiscountRate: BigNumberish, data: BytesLike, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        removeSigner(signer: string, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        sendToken(toChainId: BigNumberish, receiver: string, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        sendingCounts(sender: string, toChainId: BigNumberish, receiver: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        sendingData(arg0: string, arg1: BigNumberish, arg2: string, arg3: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            boolean,
            BigNumber,
            BigNumber
        ] & {
            amount: BigNumber;
            atBlock: BigNumber;
            isFeePayed: boolean;
            protocolFee: BigNumber;
            senderDiscountRate: BigNumber;
        }>;
        setChainValidity(chainId: BigNumberish, isValid: boolean, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        signersLength(overrides?: CallOverrides): Promise<[BigNumber]>;
        signingNonce(overrides?: CallOverrides): Promise<[BigNumber]>;
        token(overrides?: CallOverrides): Promise<[string]>;
        updateFeeDB(newDB: string, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
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
    getSigners(overrides?: CallOverrides): Promise<string[]>;
    isSigner(signer: string, overrides?: CallOverrides): Promise<boolean>;
    isTokenReceived(arg0: string, arg1: BigNumberish, arg2: string, arg3: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    isValidChain(arg0: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    migrate(newReservoir: string, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    quorum(overrides?: CallOverrides): Promise<BigNumber>;
    receiveToken(sender: string, fromChainId: BigNumberish, receiver: string, amount: BigNumberish, sendingId: BigNumberish, isFeePayed: boolean, protocolFee: BigNumberish, senderDiscountRate: BigNumberish, data: BytesLike, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    removeSigner(signer: string, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    sendToken(toChainId: BigNumberish, receiver: string, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    sendingCounts(sender: string, toChainId: BigNumberish, receiver: string, overrides?: CallOverrides): Promise<BigNumber>;
    sendingData(arg0: string, arg1: BigNumberish, arg2: string, arg3: BigNumberish, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        boolean,
        BigNumber,
        BigNumber
    ] & {
        amount: BigNumber;
        atBlock: BigNumber;
        isFeePayed: boolean;
        protocolFee: BigNumber;
        senderDiscountRate: BigNumber;
    }>;
    setChainValidity(chainId: BigNumberish, isValid: boolean, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    signersLength(overrides?: CallOverrides): Promise<BigNumber>;
    signingNonce(overrides?: CallOverrides): Promise<BigNumber>;
    token(overrides?: CallOverrides): Promise<string>;
    updateFeeDB(newDB: string, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    updateQuorum(newQuorum: BigNumberish, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addSigner(signer: string, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: CallOverrides): Promise<void>;
        feeDB(overrides?: CallOverrides): Promise<string>;
        getSigners(overrides?: CallOverrides): Promise<string[]>;
        isSigner(signer: string, overrides?: CallOverrides): Promise<boolean>;
        isTokenReceived(arg0: string, arg1: BigNumberish, arg2: string, arg3: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        isValidChain(arg0: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        migrate(newReservoir: string, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: CallOverrides): Promise<void>;
        quorum(overrides?: CallOverrides): Promise<BigNumber>;
        receiveToken(sender: string, fromChainId: BigNumberish, receiver: string, amount: BigNumberish, sendingId: BigNumberish, isFeePayed: boolean, protocolFee: BigNumberish, senderDiscountRate: BigNumberish, data: BytesLike, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: CallOverrides): Promise<void>;
        removeSigner(signer: string, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: CallOverrides): Promise<void>;
        sendToken(toChainId: BigNumberish, receiver: string, amount: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        sendingCounts(sender: string, toChainId: BigNumberish, receiver: string, overrides?: CallOverrides): Promise<BigNumber>;
        sendingData(arg0: string, arg1: BigNumberish, arg2: string, arg3: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            boolean,
            BigNumber,
            BigNumber
        ] & {
            amount: BigNumber;
            atBlock: BigNumber;
            isFeePayed: boolean;
            protocolFee: BigNumber;
            senderDiscountRate: BigNumber;
        }>;
        setChainValidity(chainId: BigNumberish, isValid: boolean, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: CallOverrides): Promise<void>;
        signersLength(overrides?: CallOverrides): Promise<BigNumber>;
        signingNonce(overrides?: CallOverrides): Promise<BigNumber>;
        token(overrides?: CallOverrides): Promise<string>;
        updateFeeDB(newDB: string, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: CallOverrides): Promise<void>;
        updateQuorum(newQuorum: BigNumberish, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AddSigner(address)"(signer?: null): AddSignerEventFilter;
        AddSigner(signer?: null): AddSignerEventFilter;
        "Migrate(address)"(newReservoir?: null): MigrateEventFilter;
        Migrate(newReservoir?: null): MigrateEventFilter;
        "ReceiveToken(address,uint256,address,uint256,uint256)"(sender?: string | null, fromChainId?: BigNumberish | null, receiver?: string | null, amount?: null, sendingId?: null): ReceiveTokenEventFilter;
        ReceiveToken(sender?: string | null, fromChainId?: BigNumberish | null, receiver?: string | null, amount?: null, sendingId?: null): ReceiveTokenEventFilter;
        "RemoveSigner(address)"(signer?: null): RemoveSignerEventFilter;
        RemoveSigner(signer?: null): RemoveSignerEventFilter;
        "SendToken(address,uint256,address,uint256,uint256,bool,uint256,uint256)"(sender?: string | null, toChainId?: BigNumberish | null, receiver?: string | null, amount?: null, sendingId?: null, isFeePayed?: null, protocolFee?: null, senderDiscountRate?: null): SendTokenEventFilter;
        SendToken(sender?: string | null, toChainId?: BigNumberish | null, receiver?: string | null, amount?: null, sendingId?: null, isFeePayed?: null, protocolFee?: null, senderDiscountRate?: null): SendTokenEventFilter;
        "SetChainValidity(uint256,bool)"(chainId?: BigNumberish | null, status?: null): SetChainValidityEventFilter;
        SetChainValidity(chainId?: BigNumberish | null, status?: null): SetChainValidityEventFilter;
        "TransferFee(address,address,uint256)"(user?: null, feeRecipient?: null, amount?: null): TransferFeeEventFilter;
        TransferFee(user?: null, feeRecipient?: null, amount?: null): TransferFeeEventFilter;
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
        getSigners(overrides?: CallOverrides): Promise<BigNumber>;
        isSigner(signer: string, overrides?: CallOverrides): Promise<BigNumber>;
        isTokenReceived(arg0: string, arg1: BigNumberish, arg2: string, arg3: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        isValidChain(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        migrate(newReservoir: string, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        quorum(overrides?: CallOverrides): Promise<BigNumber>;
        receiveToken(sender: string, fromChainId: BigNumberish, receiver: string, amount: BigNumberish, sendingId: BigNumberish, isFeePayed: boolean, protocolFee: BigNumberish, senderDiscountRate: BigNumberish, data: BytesLike, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        removeSigner(signer: string, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        sendToken(toChainId: BigNumberish, receiver: string, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        sendingCounts(sender: string, toChainId: BigNumberish, receiver: string, overrides?: CallOverrides): Promise<BigNumber>;
        sendingData(arg0: string, arg1: BigNumberish, arg2: string, arg3: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        setChainValidity(chainId: BigNumberish, isValid: boolean, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        signersLength(overrides?: CallOverrides): Promise<BigNumber>;
        signingNonce(overrides?: CallOverrides): Promise<BigNumber>;
        token(overrides?: CallOverrides): Promise<BigNumber>;
        updateFeeDB(newDB: string, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
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
        getSigners(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isSigner(signer: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isTokenReceived(arg0: string, arg1: BigNumberish, arg2: string, arg3: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isValidChain(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        migrate(newReservoir: string, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        quorum(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        receiveToken(sender: string, fromChainId: BigNumberish, receiver: string, amount: BigNumberish, sendingId: BigNumberish, isFeePayed: boolean, protocolFee: BigNumberish, senderDiscountRate: BigNumberish, data: BytesLike, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        removeSigner(signer: string, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        sendToken(toChainId: BigNumberish, receiver: string, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        sendingCounts(sender: string, toChainId: BigNumberish, receiver: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sendingData(arg0: string, arg1: BigNumberish, arg2: string, arg3: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setChainValidity(chainId: BigNumberish, isValid: boolean, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        signersLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        signingNonce(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        updateFeeDB(newDB: string, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        updateQuorum(newQuorum: BigNumberish, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=KAPMReservoir.d.ts.map