import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface KAPMInterface extends utils.Interface {
    contractName: "KAPM";
    functions: {
        "supportsInterface(bytes4)": FunctionFragment;
        "name()": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "quorum()": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "signerIndex(address)": FunctionFragment;
        "signers(uint256)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
        "decimals()": FunctionFragment;
        "isBlacklist(address)": FunctionFragment;
        "unpause()": FunctionFragment;
        "mint(address,uint256)": FunctionFragment;
        "signersLength()": FunctionFragment;
        "safeTransfer(address,uint256)": FunctionFragment;
        "safeTransferFrom(address,address,uint256)": FunctionFragment;
        "burn(uint256)": FunctionFragment;
        "isPauser(address)": FunctionFragment;
        "addSigner(address,uint8[],bytes32[],bytes32[])": FunctionFragment;
        "registerBlacklist(address)": FunctionFragment;
        "sendingCounts(address,uint256,address)": FunctionFragment;
        "paused()": FunctionFragment;
        "updateFeeDB(address)": FunctionFragment;
        "feeDB()": FunctionFragment;
        "renouncePauser()": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "updateQuorum(uint256,uint8[],bytes32[],bytes32[])": FunctionFragment;
        "burnFrom(address,uint256)": FunctionFragment;
        "isSigner(address)": FunctionFragment;
        "removeSigner(address,uint8[],bytes32[],bytes32[])": FunctionFragment;
        "signingNonce()": FunctionFragment;
        "addPauser(address)": FunctionFragment;
        "pause()": FunctionFragment;
        "owner()": FunctionFragment;
        "isOwner()": FunctionFragment;
        "symbol()": FunctionFragment;
        "addMinter(address)": FunctionFragment;
        "renounceMinter()": FunctionFragment;
        "receiveToken(address,uint256,address,uint256,uint256,bool,uint8[],bytes32[],bytes32[])": FunctionFragment;
        "setBlacklistManager(address)": FunctionFragment;
        "transfer(address,uint256)": FunctionFragment;
        "isMinter(address)": FunctionFragment;
        "unregisterBlacklist(address)": FunctionFragment;
        "sendToken(uint256,address,uint256)": FunctionFragment;
        "isTokenReceived(address,uint256,address,uint256)": FunctionFragment;
        "blacklistManager()": FunctionFragment;
        "sendedAmounts(address,uint256,address,uint256)": FunctionFragment;
        "allowance(address,address)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "approve", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "quorum", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "signerIndex", values: [string]): string;
    encodeFunctionData(functionFragment: "signers", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "isBlacklist", values: [string]): string;
    encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
    encodeFunctionData(functionFragment: "mint", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "signersLength", values?: undefined): string;
    encodeFunctionData(functionFragment: "safeTransfer", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "safeTransferFrom", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "burn", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "isPauser", values: [string]): string;
    encodeFunctionData(functionFragment: "addSigner", values: [string, BigNumberish[], BytesLike[], BytesLike[]]): string;
    encodeFunctionData(functionFragment: "registerBlacklist", values: [string]): string;
    encodeFunctionData(functionFragment: "sendingCounts", values: [string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "updateFeeDB", values: [string]): string;
    encodeFunctionData(functionFragment: "feeDB", values?: undefined): string;
    encodeFunctionData(functionFragment: "renouncePauser", values?: undefined): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "updateQuorum", values: [BigNumberish, BigNumberish[], BytesLike[], BytesLike[]]): string;
    encodeFunctionData(functionFragment: "burnFrom", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "isSigner", values: [string]): string;
    encodeFunctionData(functionFragment: "removeSigner", values: [string, BigNumberish[], BytesLike[], BytesLike[]]): string;
    encodeFunctionData(functionFragment: "signingNonce", values?: undefined): string;
    encodeFunctionData(functionFragment: "addPauser", values: [string]): string;
    encodeFunctionData(functionFragment: "pause", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "isOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "addMinter", values: [string]): string;
    encodeFunctionData(functionFragment: "renounceMinter", values?: undefined): string;
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
    encodeFunctionData(functionFragment: "setBlacklistManager", values: [string]): string;
    encodeFunctionData(functionFragment: "transfer", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "isMinter", values: [string]): string;
    encodeFunctionData(functionFragment: "unregisterBlacklist", values: [string]): string;
    encodeFunctionData(functionFragment: "sendToken", values: [BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "isTokenReceived", values: [string, BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "blacklistManager", values?: undefined): string;
    encodeFunctionData(functionFragment: "sendedAmounts", values: [string, BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "allowance", values: [string, string]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quorum", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "signerIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "signers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isBlacklist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "signersLength", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeTransferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isPauser", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addSigner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registerBlacklist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendingCounts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateFeeDB", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "feeDB", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renouncePauser", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateQuorum", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burnFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isSigner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeSigner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "signingNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addPauser", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addMinter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceMinter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "receiveToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setBlacklistManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isMinter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unregisterBlacklist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isTokenReceived", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "blacklistManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendedAmounts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    events: {
        "SetBlacklistManager(address)": EventFragment;
        "RegisterBlacklist(address)": EventFragment;
        "UnregisterBlacklist(address)": EventFragment;
        "Paused(address)": EventFragment;
        "Unpaused(address)": EventFragment;
        "PauserAdded(address)": EventFragment;
        "PauserRemoved(address)": EventFragment;
        "MinterAdded(address)": EventFragment;
        "MinterRemoved(address)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
        "Approval(address,address,uint256)": EventFragment;
        "AddSigner(address)": EventFragment;
        "RemoveSigner(address)": EventFragment;
        "UpdateFeeDB(address)": EventFragment;
        "UpdateQuorum(uint256)": EventFragment;
        "SendToken(address,uint256,address,uint256,uint256,bool)": EventFragment;
        "ReceiveToken(address,uint256,address,uint256,uint256)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "SetBlacklistManager"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RegisterBlacklist"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UnregisterBlacklist"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PauserAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PauserRemoved"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MinterAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MinterRemoved"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AddSigner"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RemoveSigner"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdateFeeDB"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdateQuorum"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SendToken"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ReceiveToken"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
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
export declare type PausedEvent = TypedEvent<[string], {
    account: string;
}>;
export declare type PausedEventFilter = TypedEventFilter<PausedEvent>;
export declare type UnpausedEvent = TypedEvent<[string], {
    account: string;
}>;
export declare type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;
export declare type PauserAddedEvent = TypedEvent<[string], {
    account: string;
}>;
export declare type PauserAddedEventFilter = TypedEventFilter<PauserAddedEvent>;
export declare type PauserRemovedEvent = TypedEvent<[string], {
    account: string;
}>;
export declare type PauserRemovedEventFilter = TypedEventFilter<PauserRemovedEvent>;
export declare type MinterAddedEvent = TypedEvent<[string], {
    account: string;
}>;
export declare type MinterAddedEventFilter = TypedEventFilter<MinterAddedEvent>;
export declare type MinterRemovedEvent = TypedEvent<[string], {
    account: string;
}>;
export declare type MinterRemovedEventFilter = TypedEventFilter<MinterRemovedEvent>;
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
export declare type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], {
    previousOwner: string;
    newOwner: string;
}>;
export declare type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface KAPM extends BaseContract {
    contractName: "KAPM";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: KAPMInterface;
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
        name(overrides?: CallOverrides): Promise<[string]>;
        approve(spender: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        quorum(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        signerIndex(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        signers(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        transferFrom(from: string, to: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        decimals(overrides?: CallOverrides): Promise<[number]>;
        isBlacklist(account: string, overrides?: CallOverrides): Promise<[boolean]>;
        unpause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        mint(account: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
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
        burn(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        isPauser(account: string, overrides?: CallOverrides): Promise<[boolean]>;
        addSigner(signer: string, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        registerBlacklist(account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        sendingCounts(sender: string, toChainId: BigNumberish, receiver: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        paused(overrides?: CallOverrides): Promise<[boolean]>;
        updateFeeDB(newDB: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        feeDB(overrides?: CallOverrides): Promise<[string]>;
        renouncePauser(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        updateQuorum(newQuorum: BigNumberish, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        burnFrom(account: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        isSigner(signer: string, overrides?: CallOverrides): Promise<[boolean]>;
        removeSigner(signer: string, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        signingNonce(overrides?: CallOverrides): Promise<[BigNumber]>;
        addPauser(account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        isOwner(overrides?: CallOverrides): Promise<[boolean]>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        addMinter(account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        renounceMinter(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        receiveToken(sender: string, fromChainId: BigNumberish, receiver: string, amount: BigNumberish, sendingId: BigNumberish, isFeePayed: boolean, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setBlacklistManager(_manager: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transfer(to: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        isMinter(account: string, overrides?: CallOverrides): Promise<[boolean]>;
        unregisterBlacklist(account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        sendToken(toChainId: BigNumberish, receiver: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        isTokenReceived(arg0: string, arg1: BigNumberish, arg2: string, arg3: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        blacklistManager(overrides?: CallOverrides): Promise<[string]>;
        sendedAmounts(arg0: string, arg1: BigNumberish, arg2: string, arg3: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    name(overrides?: CallOverrides): Promise<string>;
    approve(spender: string, value: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    quorum(overrides?: CallOverrides): Promise<BigNumber>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    signerIndex(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    signers(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    transferFrom(from: string, to: string, value: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    decimals(overrides?: CallOverrides): Promise<number>;
    isBlacklist(account: string, overrides?: CallOverrides): Promise<boolean>;
    unpause(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    mint(account: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
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
    burn(amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    isPauser(account: string, overrides?: CallOverrides): Promise<boolean>;
    addSigner(signer: string, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    registerBlacklist(account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    sendingCounts(sender: string, toChainId: BigNumberish, receiver: string, overrides?: CallOverrides): Promise<BigNumber>;
    paused(overrides?: CallOverrides): Promise<boolean>;
    updateFeeDB(newDB: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    feeDB(overrides?: CallOverrides): Promise<string>;
    renouncePauser(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    renounceOwnership(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    updateQuorum(newQuorum: BigNumberish, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    burnFrom(account: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    isSigner(signer: string, overrides?: CallOverrides): Promise<boolean>;
    removeSigner(signer: string, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    signingNonce(overrides?: CallOverrides): Promise<BigNumber>;
    addPauser(account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    pause(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    isOwner(overrides?: CallOverrides): Promise<boolean>;
    symbol(overrides?: CallOverrides): Promise<string>;
    addMinter(account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    renounceMinter(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    receiveToken(sender: string, fromChainId: BigNumberish, receiver: string, amount: BigNumberish, sendingId: BigNumberish, isFeePayed: boolean, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setBlacklistManager(_manager: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transfer(to: string, value: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    isMinter(account: string, overrides?: CallOverrides): Promise<boolean>;
    unregisterBlacklist(account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    sendToken(toChainId: BigNumberish, receiver: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    isTokenReceived(arg0: string, arg1: BigNumberish, arg2: string, arg3: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    blacklistManager(overrides?: CallOverrides): Promise<string>;
    sendedAmounts(arg0: string, arg1: BigNumberish, arg2: string, arg3: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        name(overrides?: CallOverrides): Promise<string>;
        approve(spender: string, value: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        quorum(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        signerIndex(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        signers(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
        transferFrom(from: string, to: string, value: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        decimals(overrides?: CallOverrides): Promise<number>;
        isBlacklist(account: string, overrides?: CallOverrides): Promise<boolean>;
        unpause(overrides?: CallOverrides): Promise<void>;
        mint(account: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        signersLength(overrides?: CallOverrides): Promise<BigNumber>;
        "safeTransfer(address,uint256)"(recipient: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "safeTransfer(address,uint256,bytes)"(recipient: string, amount: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        "safeTransferFrom(address,address,uint256)"(sender: string, recipient: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "safeTransferFrom(address,address,uint256,bytes)"(sender: string, recipient: string, amount: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        burn(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        isPauser(account: string, overrides?: CallOverrides): Promise<boolean>;
        addSigner(signer: string, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: CallOverrides): Promise<void>;
        registerBlacklist(account: string, overrides?: CallOverrides): Promise<void>;
        sendingCounts(sender: string, toChainId: BigNumberish, receiver: string, overrides?: CallOverrides): Promise<BigNumber>;
        paused(overrides?: CallOverrides): Promise<boolean>;
        updateFeeDB(newDB: string, overrides?: CallOverrides): Promise<void>;
        feeDB(overrides?: CallOverrides): Promise<string>;
        renouncePauser(overrides?: CallOverrides): Promise<void>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        updateQuorum(newQuorum: BigNumberish, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: CallOverrides): Promise<void>;
        burnFrom(account: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        isSigner(signer: string, overrides?: CallOverrides): Promise<boolean>;
        removeSigner(signer: string, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: CallOverrides): Promise<void>;
        signingNonce(overrides?: CallOverrides): Promise<BigNumber>;
        addPauser(account: string, overrides?: CallOverrides): Promise<void>;
        pause(overrides?: CallOverrides): Promise<void>;
        owner(overrides?: CallOverrides): Promise<string>;
        isOwner(overrides?: CallOverrides): Promise<boolean>;
        symbol(overrides?: CallOverrides): Promise<string>;
        addMinter(account: string, overrides?: CallOverrides): Promise<void>;
        renounceMinter(overrides?: CallOverrides): Promise<void>;
        receiveToken(sender: string, fromChainId: BigNumberish, receiver: string, amount: BigNumberish, sendingId: BigNumberish, isFeePayed: boolean, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: CallOverrides): Promise<void>;
        setBlacklistManager(_manager: string, overrides?: CallOverrides): Promise<void>;
        transfer(to: string, value: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        isMinter(account: string, overrides?: CallOverrides): Promise<boolean>;
        unregisterBlacklist(account: string, overrides?: CallOverrides): Promise<void>;
        sendToken(toChainId: BigNumberish, receiver: string, amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        isTokenReceived(arg0: string, arg1: BigNumberish, arg2: string, arg3: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        blacklistManager(overrides?: CallOverrides): Promise<string>;
        sendedAmounts(arg0: string, arg1: BigNumberish, arg2: string, arg3: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "SetBlacklistManager(address)"(account?: string | null): SetBlacklistManagerEventFilter;
        SetBlacklistManager(account?: string | null): SetBlacklistManagerEventFilter;
        "RegisterBlacklist(address)"(account?: string | null): RegisterBlacklistEventFilter;
        RegisterBlacklist(account?: string | null): RegisterBlacklistEventFilter;
        "UnregisterBlacklist(address)"(account?: string | null): UnregisterBlacklistEventFilter;
        UnregisterBlacklist(account?: string | null): UnregisterBlacklistEventFilter;
        "Paused(address)"(account?: null): PausedEventFilter;
        Paused(account?: null): PausedEventFilter;
        "Unpaused(address)"(account?: null): UnpausedEventFilter;
        Unpaused(account?: null): UnpausedEventFilter;
        "PauserAdded(address)"(account?: string | null): PauserAddedEventFilter;
        PauserAdded(account?: string | null): PauserAddedEventFilter;
        "PauserRemoved(address)"(account?: string | null): PauserRemovedEventFilter;
        PauserRemoved(account?: string | null): PauserRemovedEventFilter;
        "MinterAdded(address)"(account?: string | null): MinterAddedEventFilter;
        MinterAdded(account?: string | null): MinterAddedEventFilter;
        "MinterRemoved(address)"(account?: string | null): MinterRemovedEventFilter;
        MinterRemoved(account?: string | null): MinterRemovedEventFilter;
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
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
    };
    estimateGas: {
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        quorum(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        signerIndex(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        signers(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        transferFrom(from: string, to: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        isBlacklist(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        unpause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        mint(account: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
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
        burn(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        isPauser(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        addSigner(signer: string, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        registerBlacklist(account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        sendingCounts(sender: string, toChainId: BigNumberish, receiver: string, overrides?: CallOverrides): Promise<BigNumber>;
        paused(overrides?: CallOverrides): Promise<BigNumber>;
        updateFeeDB(newDB: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        feeDB(overrides?: CallOverrides): Promise<BigNumber>;
        renouncePauser(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        updateQuorum(newQuorum: BigNumberish, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        burnFrom(account: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        isSigner(signer: string, overrides?: CallOverrides): Promise<BigNumber>;
        removeSigner(signer: string, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        signingNonce(overrides?: CallOverrides): Promise<BigNumber>;
        addPauser(account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        isOwner(overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        addMinter(account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        renounceMinter(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        receiveToken(sender: string, fromChainId: BigNumberish, receiver: string, amount: BigNumberish, sendingId: BigNumberish, isFeePayed: boolean, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setBlacklistManager(_manager: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transfer(to: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        isMinter(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        unregisterBlacklist(account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        sendToken(toChainId: BigNumberish, receiver: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        isTokenReceived(arg0: string, arg1: BigNumberish, arg2: string, arg3: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        blacklistManager(overrides?: CallOverrides): Promise<BigNumber>;
        sendedAmounts(arg0: string, arg1: BigNumberish, arg2: string, arg3: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(spender: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        quorum(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        signerIndex(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        signers(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferFrom(from: string, to: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isBlacklist(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        unpause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        mint(account: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
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
        burn(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        isPauser(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addSigner(signer: string, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        registerBlacklist(account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        sendingCounts(sender: string, toChainId: BigNumberish, receiver: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        updateFeeDB(newDB: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        feeDB(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renouncePauser(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        updateQuorum(newQuorum: BigNumberish, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        burnFrom(account: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        isSigner(signer: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeSigner(signer: string, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        signingNonce(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addPauser(account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addMinter(account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        renounceMinter(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        receiveToken(sender: string, fromChainId: BigNumberish, receiver: string, amount: BigNumberish, sendingId: BigNumberish, isFeePayed: boolean, vs: BigNumberish[], rs: BytesLike[], ss: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setBlacklistManager(_manager: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transfer(to: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        isMinter(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        unregisterBlacklist(account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        sendToken(toChainId: BigNumberish, receiver: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        isTokenReceived(arg0: string, arg1: BigNumberish, arg2: string, arg3: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        blacklistManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sendedAmounts(arg0: string, arg1: BigNumberish, arg2: string, arg3: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=KAPM.d.ts.map