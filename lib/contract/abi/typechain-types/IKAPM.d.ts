import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IKAPMInterface extends utils.Interface {
    contractName: "IKAPM";
    functions: {
        "supportsInterface(bytes4)": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "quorum()": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "signerIndex(address)": FunctionFragment;
        "signers(uint256)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
        "isBlacklist(address)": FunctionFragment;
        "signersLength()": FunctionFragment;
        "safeTransfer(address,uint256)": FunctionFragment;
        "safeTransferFrom(address,address,uint256)": FunctionFragment;
        "sendingCounts(address,uint256,address)": FunctionFragment;
        "feeDB()": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "isSigner(address)": FunctionFragment;
        "receiveToken(address,uint256,address,uint256,uint256,bool,uint8[],bytes32[],bytes32[])": FunctionFragment;
        "transfer(address,uint256)": FunctionFragment;
        "sendToken(uint256,address,uint256)": FunctionFragment;
        "isTokenReceived(address,uint256,address,uint256)": FunctionFragment;
        "sendedAmounts(address,uint256,address,uint256)": FunctionFragment;
        "allowance(address,address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "approve", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "quorum", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "signerIndex", values: [string]): string;
    encodeFunctionData(functionFragment: "signers", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "isBlacklist", values: [string]): string;
    encodeFunctionData(functionFragment: "signersLength", values?: undefined): string;
    encodeFunctionData(functionFragment: "safeTransfer", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "safeTransferFrom", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "sendingCounts", values: [string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "feeDB", values?: undefined): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "isSigner", values: [string]): string;
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
    encodeFunctionData(functionFragment: "transfer", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "sendToken", values: [BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "isTokenReceived", values: [string, BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "sendedAmounts", values: [string, BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "allowance", values: [string, string]): string;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quorum", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "signerIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "signers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isBlacklist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "signersLength", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeTransferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendingCounts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "feeDB", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isSigner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "receiveToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isTokenReceived", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendedAmounts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    events: {
        "SetBlacklistManager(address)": EventFragment;
        "RegisterBlacklist(address)": EventFragment;
        "UnregisterBlacklist(address)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
        "Approval(address,address,uint256)": EventFragment;
        "AddSigner(address)": EventFragment;
        "RemoveSigner(address)": EventFragment;
        "UpdateFeeDB(address)": EventFragment;
        "UpdateQuorum(uint256)": EventFragment;
        "SendToken(address,uint256,address,uint256,uint256,bool)": EventFragment;
        "ReceiveToken(address,uint256,address,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "SetBlacklistManager"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RegisterBlacklist"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UnregisterBlacklist"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AddSigner"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RemoveSigner"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdateFeeDB"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdateQuorum"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SendToken"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ReceiveToken"): EventFragment;
}
export declare type SetBlacklistManagerEvent = TypedEvent<[
    string
], {
    account: string;
}>;
export declare type SetBlacklistManagerEventFilter = TypedEventFilter<SetBlacklistManagerEvent>;
export declare type RegisterBlacklistEvent = TypedEvent<[string], {
    account: string;
}>;
export declare type RegisterBlacklistEventFilter = TypedEventFilter<RegisterBlacklistEvent>;
export declare type UnregisterBlacklistEvent = TypedEvent<[
    string
], {
    account: string;
}>;
export declare type UnregisterBlacklistEventFilter = TypedEventFilter<UnregisterBlacklistEvent>;
export declare type TransferEvent = TypedEvent<[
    string,
    string,
    BigNumber
], {
    from: string;
    to: string;
    value: BigNumber;
}>;
export declare type TransferEventFilter = TypedEventFilter<TransferEvent>;
export declare type ApprovalEvent = TypedEvent<[
    string,
    string,
    BigNumber
], {
    owner: string;
    spender: string;
    value: BigNumber;
}>;
export declare type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;
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
export interface IKAPM extends BaseContract {
    contractName: "IKAPM";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IKAPMInterface;
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
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        quorum(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        signerIndex(signer: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        signers(id: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        transferFrom(sender: string, recipient: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        isBlacklist(account: string, overrides?: CallOverrides): Promise<[boolean]>;
        signersLength(overrides?: CallOverrides): Promise<[BigNumber]>;
        "safeTransfer(address,uint256)"(recipient: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "safeTransfer(address,uint256,bytes)"(recipient: string, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "safeTransferFrom(address,address,uint256)"(sender: string, recipient: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "safeTransferFrom(address,address,uint256,bytes)"(sender: string, recipient: string, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        sendingCounts(sender: string, toChainId: BigNumberish, receiver: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        feeDB(overrides?: CallOverrides): Promise<[string]>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        isSigner(signer: string, overrides?: CallOverrides): Promise<[boolean]>;
        receiveToken(sender: string, fromChainId: BigNumberish, receiver: string, amount: BigNumberish, sendingId: BigNumberish, isFeePayed: boolean, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transfer(recipient: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        sendToken(toChainId: BigNumberish, receiver: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        isTokenReceived(sender: string, fromChainId: BigNumberish, receiver: string, sendingId: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        sendedAmounts(sender: string, toChainId: BigNumberish, receiver: string, sendingId: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    quorum(overrides?: CallOverrides): Promise<BigNumber>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    signerIndex(signer: string, overrides?: CallOverrides): Promise<BigNumber>;
    signers(id: BigNumberish, overrides?: CallOverrides): Promise<string>;
    transferFrom(sender: string, recipient: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    isBlacklist(account: string, overrides?: CallOverrides): Promise<boolean>;
    signersLength(overrides?: CallOverrides): Promise<BigNumber>;
    "safeTransfer(address,uint256)"(recipient: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "safeTransfer(address,uint256,bytes)"(recipient: string, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "safeTransferFrom(address,address,uint256)"(sender: string, recipient: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "safeTransferFrom(address,address,uint256,bytes)"(sender: string, recipient: string, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    sendingCounts(sender: string, toChainId: BigNumberish, receiver: string, overrides?: CallOverrides): Promise<BigNumber>;
    feeDB(overrides?: CallOverrides): Promise<string>;
    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    isSigner(signer: string, overrides?: CallOverrides): Promise<boolean>;
    receiveToken(sender: string, fromChainId: BigNumberish, receiver: string, amount: BigNumberish, sendingId: BigNumberish, isFeePayed: boolean, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transfer(recipient: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    sendToken(toChainId: BigNumberish, receiver: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    isTokenReceived(sender: string, fromChainId: BigNumberish, receiver: string, sendingId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    sendedAmounts(sender: string, toChainId: BigNumberish, receiver: string, sendingId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        approve(spender: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        quorum(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        signerIndex(signer: string, overrides?: CallOverrides): Promise<BigNumber>;
        signers(id: BigNumberish, overrides?: CallOverrides): Promise<string>;
        transferFrom(sender: string, recipient: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        isBlacklist(account: string, overrides?: CallOverrides): Promise<boolean>;
        signersLength(overrides?: CallOverrides): Promise<BigNumber>;
        "safeTransfer(address,uint256)"(recipient: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "safeTransfer(address,uint256,bytes)"(recipient: string, amount: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        "safeTransferFrom(address,address,uint256)"(sender: string, recipient: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "safeTransferFrom(address,address,uint256,bytes)"(sender: string, recipient: string, amount: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        sendingCounts(sender: string, toChainId: BigNumberish, receiver: string, overrides?: CallOverrides): Promise<BigNumber>;
        feeDB(overrides?: CallOverrides): Promise<string>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        isSigner(signer: string, overrides?: CallOverrides): Promise<boolean>;
        receiveToken(sender: string, fromChainId: BigNumberish, receiver: string, amount: BigNumberish, sendingId: BigNumberish, isFeePayed: boolean, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: CallOverrides): Promise<void>;
        transfer(recipient: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        sendToken(toChainId: BigNumberish, receiver: string, amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        isTokenReceived(sender: string, fromChainId: BigNumberish, receiver: string, sendingId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        sendedAmounts(sender: string, toChainId: BigNumberish, receiver: string, sendingId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "SetBlacklistManager(address)"(account?: string | null): SetBlacklistManagerEventFilter;
        SetBlacklistManager(account?: string | null): SetBlacklistManagerEventFilter;
        "RegisterBlacklist(address)"(account?: string | null): RegisterBlacklistEventFilter;
        RegisterBlacklist(account?: string | null): RegisterBlacklistEventFilter;
        "UnregisterBlacklist(address)"(account?: string | null): UnregisterBlacklistEventFilter;
        UnregisterBlacklist(account?: string | null): UnregisterBlacklistEventFilter;
        "Transfer(address,address,uint256)"(from?: string | null, to?: string | null, value?: null): TransferEventFilter;
        Transfer(from?: string | null, to?: string | null, value?: null): TransferEventFilter;
        "Approval(address,address,uint256)"(owner?: string | null, spender?: string | null, value?: null): ApprovalEventFilter;
        Approval(owner?: string | null, spender?: string | null, value?: null): ApprovalEventFilter;
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
    };
    estimateGas: {
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        quorum(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        signerIndex(signer: string, overrides?: CallOverrides): Promise<BigNumber>;
        signers(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        transferFrom(sender: string, recipient: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        isBlacklist(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        signersLength(overrides?: CallOverrides): Promise<BigNumber>;
        "safeTransfer(address,uint256)"(recipient: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "safeTransfer(address,uint256,bytes)"(recipient: string, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "safeTransferFrom(address,address,uint256)"(sender: string, recipient: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "safeTransferFrom(address,address,uint256,bytes)"(sender: string, recipient: string, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        sendingCounts(sender: string, toChainId: BigNumberish, receiver: string, overrides?: CallOverrides): Promise<BigNumber>;
        feeDB(overrides?: CallOverrides): Promise<BigNumber>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        isSigner(signer: string, overrides?: CallOverrides): Promise<BigNumber>;
        receiveToken(sender: string, fromChainId: BigNumberish, receiver: string, amount: BigNumberish, sendingId: BigNumberish, isFeePayed: boolean, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transfer(recipient: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        sendToken(toChainId: BigNumberish, receiver: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        isTokenReceived(sender: string, fromChainId: BigNumberish, receiver: string, sendingId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        sendedAmounts(sender: string, toChainId: BigNumberish, receiver: string, sendingId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        quorum(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        signerIndex(signer: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        signers(id: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferFrom(sender: string, recipient: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        isBlacklist(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        signersLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "safeTransfer(address,uint256)"(recipient: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "safeTransfer(address,uint256,bytes)"(recipient: string, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "safeTransferFrom(address,address,uint256)"(sender: string, recipient: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "safeTransferFrom(address,address,uint256,bytes)"(sender: string, recipient: string, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        sendingCounts(sender: string, toChainId: BigNumberish, receiver: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        feeDB(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isSigner(signer: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        receiveToken(sender: string, fromChainId: BigNumberish, receiver: string, amount: BigNumberish, sendingId: BigNumberish, isFeePayed: boolean, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transfer(recipient: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        sendToken(toChainId: BigNumberish, receiver: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        isTokenReceived(sender: string, fromChainId: BigNumberish, receiver: string, sendingId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sendedAmounts(sender: string, toChainId: BigNumberish, receiver: string, sendingId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=IKAPM.d.ts.map