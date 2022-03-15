import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface FeeDBInterface extends utils.Interface {
    contractName: "FeeDB";
    functions: {
        "togglePaysFeeWhenSending()": FunctionFragment;
        "protocolFeeRecipient()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "paysFeeWhenSending()": FunctionFragment;
        "userDiscountRate(address)": FunctionFragment;
        "owner()": FunctionFragment;
        "isOwner()": FunctionFragment;
        "protocolFee()": FunctionFragment;
        "userFee(address,uint256)": FunctionFragment;
        "setDiscountRate(address[],uint256[])": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "updateFeeAndRecipient(uint256,address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "togglePaysFeeWhenSending", values?: undefined): string;
    encodeFunctionData(functionFragment: "protocolFeeRecipient", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "paysFeeWhenSending", values?: undefined): string;
    encodeFunctionData(functionFragment: "userDiscountRate", values: [string]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "isOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "protocolFee", values?: undefined): string;
    encodeFunctionData(functionFragment: "userFee", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setDiscountRate", values: [string[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    encodeFunctionData(functionFragment: "updateFeeAndRecipient", values: [BigNumberish, string]): string;
    decodeFunctionResult(functionFragment: "togglePaysFeeWhenSending", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "protocolFeeRecipient", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paysFeeWhenSending", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "userDiscountRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "protocolFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "userFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDiscountRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateFeeAndRecipient", data: BytesLike): Result;
    events: {
        "UpdateFeeAndRecipient(uint256,address)": EventFragment;
        "UpdatePaysFeeWhenSending(bool)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "UpdateFeeAndRecipient"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdatePaysFeeWhenSending"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}
export declare type UpdateFeeAndRecipientEvent = TypedEvent<[
    BigNumber,
    string
], {
    newFee: BigNumber;
    newRecipient: string;
}>;
export declare type UpdateFeeAndRecipientEventFilter = TypedEventFilter<UpdateFeeAndRecipientEvent>;
export declare type UpdatePaysFeeWhenSendingEvent = TypedEvent<[
    boolean
], {
    newType: boolean;
}>;
export declare type UpdatePaysFeeWhenSendingEventFilter = TypedEventFilter<UpdatePaysFeeWhenSendingEvent>;
export declare type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], {
    previousOwner: string;
    newOwner: string;
}>;
export declare type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
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
        togglePaysFeeWhenSending(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        protocolFeeRecipient(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        paysFeeWhenSending(overrides?: CallOverrides): Promise<[boolean]>;
        userDiscountRate(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        isOwner(overrides?: CallOverrides): Promise<[boolean]>;
        protocolFee(overrides?: CallOverrides): Promise<[BigNumber]>;
        userFee(user: string, amount: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        setDiscountRate(users: string[], discountRates: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        updateFeeAndRecipient(newFee: BigNumberish, newRecipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    togglePaysFeeWhenSending(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    protocolFeeRecipient(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    paysFeeWhenSending(overrides?: CallOverrides): Promise<boolean>;
    userDiscountRate(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    owner(overrides?: CallOverrides): Promise<string>;
    isOwner(overrides?: CallOverrides): Promise<boolean>;
    protocolFee(overrides?: CallOverrides): Promise<BigNumber>;
    userFee(user: string, amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    setDiscountRate(users: string[], discountRates: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    updateFeeAndRecipient(newFee: BigNumberish, newRecipient: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        togglePaysFeeWhenSending(overrides?: CallOverrides): Promise<void>;
        protocolFeeRecipient(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        paysFeeWhenSending(overrides?: CallOverrides): Promise<boolean>;
        userDiscountRate(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<string>;
        isOwner(overrides?: CallOverrides): Promise<boolean>;
        protocolFee(overrides?: CallOverrides): Promise<BigNumber>;
        userFee(user: string, amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        setDiscountRate(users: string[], discountRates: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
        updateFeeAndRecipient(newFee: BigNumberish, newRecipient: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "UpdateFeeAndRecipient(uint256,address)"(newFee?: null, newRecipient?: null): UpdateFeeAndRecipientEventFilter;
        UpdateFeeAndRecipient(newFee?: null, newRecipient?: null): UpdateFeeAndRecipientEventFilter;
        "UpdatePaysFeeWhenSending(bool)"(newType?: null): UpdatePaysFeeWhenSendingEventFilter;
        UpdatePaysFeeWhenSending(newType?: null): UpdatePaysFeeWhenSendingEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
    };
    estimateGas: {
        togglePaysFeeWhenSending(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        protocolFeeRecipient(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        paysFeeWhenSending(overrides?: CallOverrides): Promise<BigNumber>;
        userDiscountRate(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        isOwner(overrides?: CallOverrides): Promise<BigNumber>;
        protocolFee(overrides?: CallOverrides): Promise<BigNumber>;
        userFee(user: string, amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        setDiscountRate(users: string[], discountRates: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        updateFeeAndRecipient(newFee: BigNumberish, newRecipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        togglePaysFeeWhenSending(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        protocolFeeRecipient(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        paysFeeWhenSending(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        userDiscountRate(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        protocolFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        userFee(user: string, amount: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setDiscountRate(users: string[], discountRates: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        updateFeeAndRecipient(newFee: BigNumberish, newRecipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=FeeDB.d.ts.map