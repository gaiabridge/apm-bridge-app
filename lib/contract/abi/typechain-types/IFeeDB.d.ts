import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IFeeDBInterface extends utils.Interface {
    contractName: "IFeeDB";
    functions: {
        "paysFeeWhenSending()": FunctionFragment;
        "protocolFee()": FunctionFragment;
        "protocolFeeRecipient()": FunctionFragment;
        "userDiscountRate(address)": FunctionFragment;
        "userFee(address,uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "paysFeeWhenSending", values?: undefined): string;
    encodeFunctionData(functionFragment: "protocolFee", values?: undefined): string;
    encodeFunctionData(functionFragment: "protocolFeeRecipient", values?: undefined): string;
    encodeFunctionData(functionFragment: "userDiscountRate", values: [string]): string;
    encodeFunctionData(functionFragment: "userFee", values: [string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "paysFeeWhenSending", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "protocolFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "protocolFeeRecipient", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "userDiscountRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "userFee", data: BytesLike): Result;
    events: {
        "UpdateFeeAndRecipient(uint256,address)": EventFragment;
        "UpdatePaysFeeWhenSending(bool)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "UpdateFeeAndRecipient"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdatePaysFeeWhenSending"): EventFragment;
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
export interface IFeeDB extends BaseContract {
    contractName: "IFeeDB";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IFeeDBInterface;
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
        paysFeeWhenSending(overrides?: CallOverrides): Promise<[boolean]>;
        protocolFee(overrides?: CallOverrides): Promise<[BigNumber]>;
        protocolFeeRecipient(overrides?: CallOverrides): Promise<[string]>;
        userDiscountRate(user: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        userFee(user: string, amount: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    paysFeeWhenSending(overrides?: CallOverrides): Promise<boolean>;
    protocolFee(overrides?: CallOverrides): Promise<BigNumber>;
    protocolFeeRecipient(overrides?: CallOverrides): Promise<string>;
    userDiscountRate(user: string, overrides?: CallOverrides): Promise<BigNumber>;
    userFee(user: string, amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        paysFeeWhenSending(overrides?: CallOverrides): Promise<boolean>;
        protocolFee(overrides?: CallOverrides): Promise<BigNumber>;
        protocolFeeRecipient(overrides?: CallOverrides): Promise<string>;
        userDiscountRate(user: string, overrides?: CallOverrides): Promise<BigNumber>;
        userFee(user: string, amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "UpdateFeeAndRecipient(uint256,address)"(newFee?: null, newRecipient?: null): UpdateFeeAndRecipientEventFilter;
        UpdateFeeAndRecipient(newFee?: null, newRecipient?: null): UpdateFeeAndRecipientEventFilter;
        "UpdatePaysFeeWhenSending(bool)"(newType?: null): UpdatePaysFeeWhenSendingEventFilter;
        UpdatePaysFeeWhenSending(newType?: null): UpdatePaysFeeWhenSendingEventFilter;
    };
    estimateGas: {
        paysFeeWhenSending(overrides?: CallOverrides): Promise<BigNumber>;
        protocolFee(overrides?: CallOverrides): Promise<BigNumber>;
        protocolFeeRecipient(overrides?: CallOverrides): Promise<BigNumber>;
        userDiscountRate(user: string, overrides?: CallOverrides): Promise<BigNumber>;
        userFee(user: string, amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        paysFeeWhenSending(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        protocolFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        protocolFeeRecipient(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        userDiscountRate(user: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        userFee(user: string, amount: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=IFeeDB.d.ts.map