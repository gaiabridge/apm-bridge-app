import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface FeeDBInterface extends utils.Interface {
    contractName: "FeeDB";
    functions: {
        "getFeeDataForReceive(address,bytes)": FunctionFragment;
        "getFeeDataForSend(address,bytes)": FunctionFragment;
        "nftDiscountRate(address)": FunctionFragment;
        "owner()": FunctionFragment;
        "paysFeeWhenSending()": FunctionFragment;
        "protocolFee()": FunctionFragment;
        "protocolFeeRecipient()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "togglePaysFeeWhenSending()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "updateFeeAndRecipient(uint256,address)": FunctionFragment;
        "updateNFTDiscountRate(address[],uint256[])": FunctionFragment;
        "updateUserDiscountRate(address[],uint256[])": FunctionFragment;
        "userDiscountRate(address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "getFeeDataForReceive", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "getFeeDataForSend", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "nftDiscountRate", values: [string]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "paysFeeWhenSending", values?: undefined): string;
    encodeFunctionData(functionFragment: "protocolFee", values?: undefined): string;
    encodeFunctionData(functionFragment: "protocolFeeRecipient", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "togglePaysFeeWhenSending", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    encodeFunctionData(functionFragment: "updateFeeAndRecipient", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "updateNFTDiscountRate", values: [string[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "updateUserDiscountRate", values: [string[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "userDiscountRate", values: [string]): string;
    decodeFunctionResult(functionFragment: "getFeeDataForReceive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFeeDataForSend", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nftDiscountRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paysFeeWhenSending", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "protocolFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "protocolFeeRecipient", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "togglePaysFeeWhenSending", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateFeeAndRecipient", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateNFTDiscountRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateUserDiscountRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "userDiscountRate", data: BytesLike): Result;
    events: {
        "OwnershipTransferred(address,address)": EventFragment;
        "UpdateFeeAndRecipient(uint256,address)": EventFragment;
        "UpdateNFTDiscountRate(address,uint256)": EventFragment;
        "UpdatePaysFeeWhenSending(bool)": EventFragment;
        "UpdateUserDiscountRate(address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdateFeeAndRecipient"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdateNFTDiscountRate"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdatePaysFeeWhenSending"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdateUserDiscountRate"): EventFragment;
}
export declare type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], {
    previousOwner: string;
    newOwner: string;
}>;
export declare type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export declare type UpdateFeeAndRecipientEvent = TypedEvent<[
    BigNumber,
    string
], {
    newFee: BigNumber;
    newRecipient: string;
}>;
export declare type UpdateFeeAndRecipientEventFilter = TypedEventFilter<UpdateFeeAndRecipientEvent>;
export declare type UpdateNFTDiscountRateEvent = TypedEvent<[
    string,
    BigNumber
], {
    nft: string;
    discountRate: BigNumber;
}>;
export declare type UpdateNFTDiscountRateEventFilter = TypedEventFilter<UpdateNFTDiscountRateEvent>;
export declare type UpdatePaysFeeWhenSendingEvent = TypedEvent<[
    boolean
], {
    newType: boolean;
}>;
export declare type UpdatePaysFeeWhenSendingEventFilter = TypedEventFilter<UpdatePaysFeeWhenSendingEvent>;
export declare type UpdateUserDiscountRateEvent = TypedEvent<[
    string,
    BigNumber
], {
    user: string;
    discountRate: BigNumber;
}>;
export declare type UpdateUserDiscountRateEventFilter = TypedEventFilter<UpdateUserDiscountRateEvent>;
export interface FeeDB extends BaseContract {
    contractName: "FeeDB";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: FeeDBInterface;
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
        getFeeDataForReceive(user: string, data: BytesLike, overrides?: CallOverrides): Promise<[
            string,
            BigNumber
        ] & {
            _recipient: string;
            _discountRate: BigNumber;
        }>;
        getFeeDataForSend(user: string, data: BytesLike, overrides?: CallOverrides): Promise<[
            boolean,
            string,
            BigNumber,
            BigNumber
        ] & {
            _paysFeeWhenSending: boolean;
            _recipient: string;
            _protocolFee: BigNumber;
            _discountRate: BigNumber;
        }>;
        nftDiscountRate(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        paysFeeWhenSending(overrides?: CallOverrides): Promise<[boolean]>;
        protocolFee(overrides?: CallOverrides): Promise<[BigNumber]>;
        protocolFeeRecipient(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        togglePaysFeeWhenSending(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        updateFeeAndRecipient(newFee: BigNumberish, newRecipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        updateNFTDiscountRate(nfts: string[], discountRates: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        updateUserDiscountRate(users: string[], discountRates: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        userDiscountRate(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    getFeeDataForReceive(user: string, data: BytesLike, overrides?: CallOverrides): Promise<[
        string,
        BigNumber
    ] & {
        _recipient: string;
        _discountRate: BigNumber;
    }>;
    getFeeDataForSend(user: string, data: BytesLike, overrides?: CallOverrides): Promise<[
        boolean,
        string,
        BigNumber,
        BigNumber
    ] & {
        _paysFeeWhenSending: boolean;
        _recipient: string;
        _protocolFee: BigNumber;
        _discountRate: BigNumber;
    }>;
    nftDiscountRate(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    owner(overrides?: CallOverrides): Promise<string>;
    paysFeeWhenSending(overrides?: CallOverrides): Promise<boolean>;
    protocolFee(overrides?: CallOverrides): Promise<BigNumber>;
    protocolFeeRecipient(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    togglePaysFeeWhenSending(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    updateFeeAndRecipient(newFee: BigNumberish, newRecipient: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    updateNFTDiscountRate(nfts: string[], discountRates: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    updateUserDiscountRate(users: string[], discountRates: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    userDiscountRate(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        getFeeDataForReceive(user: string, data: BytesLike, overrides?: CallOverrides): Promise<[
            string,
            BigNumber
        ] & {
            _recipient: string;
            _discountRate: BigNumber;
        }>;
        getFeeDataForSend(user: string, data: BytesLike, overrides?: CallOverrides): Promise<[
            boolean,
            string,
            BigNumber,
            BigNumber
        ] & {
            _paysFeeWhenSending: boolean;
            _recipient: string;
            _protocolFee: BigNumber;
            _discountRate: BigNumber;
        }>;
        nftDiscountRate(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<string>;
        paysFeeWhenSending(overrides?: CallOverrides): Promise<boolean>;
        protocolFee(overrides?: CallOverrides): Promise<BigNumber>;
        protocolFeeRecipient(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        togglePaysFeeWhenSending(overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
        updateFeeAndRecipient(newFee: BigNumberish, newRecipient: string, overrides?: CallOverrides): Promise<void>;
        updateNFTDiscountRate(nfts: string[], discountRates: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        updateUserDiscountRate(users: string[], discountRates: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        userDiscountRate(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        "UpdateFeeAndRecipient(uint256,address)"(newFee?: null, newRecipient?: null): UpdateFeeAndRecipientEventFilter;
        UpdateFeeAndRecipient(newFee?: null, newRecipient?: null): UpdateFeeAndRecipientEventFilter;
        "UpdateNFTDiscountRate(address,uint256)"(nft?: null, discountRate?: null): UpdateNFTDiscountRateEventFilter;
        UpdateNFTDiscountRate(nft?: null, discountRate?: null): UpdateNFTDiscountRateEventFilter;
        "UpdatePaysFeeWhenSending(bool)"(newType?: null): UpdatePaysFeeWhenSendingEventFilter;
        UpdatePaysFeeWhenSending(newType?: null): UpdatePaysFeeWhenSendingEventFilter;
        "UpdateUserDiscountRate(address,uint256)"(user?: null, discountRate?: null): UpdateUserDiscountRateEventFilter;
        UpdateUserDiscountRate(user?: null, discountRate?: null): UpdateUserDiscountRateEventFilter;
    };
    estimateGas: {
        getFeeDataForReceive(user: string, data: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getFeeDataForSend(user: string, data: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        nftDiscountRate(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        paysFeeWhenSending(overrides?: CallOverrides): Promise<BigNumber>;
        protocolFee(overrides?: CallOverrides): Promise<BigNumber>;
        protocolFeeRecipient(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        togglePaysFeeWhenSending(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        updateFeeAndRecipient(newFee: BigNumberish, newRecipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        updateNFTDiscountRate(nfts: string[], discountRates: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        updateUserDiscountRate(users: string[], discountRates: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        userDiscountRate(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        getFeeDataForReceive(user: string, data: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getFeeDataForSend(user: string, data: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nftDiscountRate(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        paysFeeWhenSending(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        protocolFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        protocolFeeRecipient(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        togglePaysFeeWhenSending(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        updateFeeAndRecipient(newFee: BigNumberish, newRecipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        updateNFTDiscountRate(nfts: string[], discountRates: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        updateUserDiscountRate(users: string[], discountRates: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        userDiscountRate(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=FeeDB.d.ts.map