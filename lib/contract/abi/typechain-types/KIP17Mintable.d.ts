import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface KIP17MintableInterface extends utils.Interface {
    contractName: "KIP17Mintable";
    functions: {
        "supportsInterface(bytes4)": FunctionFragment;
        "getApproved(uint256)": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
        "mint(address,uint256)": FunctionFragment;
        "safeTransferFrom(address,address,uint256)": FunctionFragment;
        "ownerOf(uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "addMinter(address)": FunctionFragment;
        "renounceMinter()": FunctionFragment;
        "setApprovalForAll(address,bool)": FunctionFragment;
        "isMinter(address)": FunctionFragment;
        "isApprovedForAll(address,address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getApproved", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "approve", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "mint", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "safeTransferFrom", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "ownerOf", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "addMinter", values: [string]): string;
    encodeFunctionData(functionFragment: "renounceMinter", values?: undefined): string;
    encodeFunctionData(functionFragment: "setApprovalForAll", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "isMinter", values: [string]): string;
    encodeFunctionData(functionFragment: "isApprovedForAll", values: [string, string]): string;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getApproved", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeTransferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ownerOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addMinter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceMinter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setApprovalForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isMinter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isApprovedForAll", data: BytesLike): Result;
    events: {
        "MinterAdded(address)": EventFragment;
        "MinterRemoved(address)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
        "Approval(address,address,uint256)": EventFragment;
        "ApprovalForAll(address,address,bool)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "MinterAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MinterRemoved"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
}
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
    tokenId: BigNumber;
}>;
export declare type TransferEventFilter = TypedEventFilter<TransferEvent>;
export declare type ApprovalEvent = TypedEvent<[
    string,
    string,
    BigNumber
], {
    owner: string;
    approved: string;
    tokenId: BigNumber;
}>;
export declare type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;
export declare type ApprovalForAllEvent = TypedEvent<[
    string,
    string,
    boolean
], {
    owner: string;
    operator: string;
    approved: boolean;
}>;
export declare type ApprovalForAllEventFilter = TypedEventFilter<ApprovalForAllEvent>;
export interface KIP17Mintable extends BaseContract {
    contractName: "KIP17Mintable";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: KIP17MintableInterface;
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
        getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        approve(to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transferFrom(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        mint(to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "safeTransferFrom(address,address,uint256)"(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: string, to: string, tokenId: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        balanceOf(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        addMinter(account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        renounceMinter(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setApprovalForAll(to: string, approved: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        isMinter(account: string, overrides?: CallOverrides): Promise<[boolean]>;
        isApprovedForAll(owner: string, operator: string, overrides?: CallOverrides): Promise<[boolean]>;
    };
    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
    approve(to: string, tokenId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transferFrom(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    mint(to: string, tokenId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "safeTransferFrom(address,address,uint256)"(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "safeTransferFrom(address,address,uint256,bytes)"(from: string, to: string, tokenId: BigNumberish, _data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
    addMinter(account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    renounceMinter(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setApprovalForAll(to: string, approved: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    isMinter(account: string, overrides?: CallOverrides): Promise<boolean>;
    isApprovedForAll(owner: string, operator: string, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
        approve(to: string, tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        transferFrom(from: string, to: string, tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        mint(to: string, tokenId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        "safeTransferFrom(address,address,uint256)"(from: string, to: string, tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: string, to: string, tokenId: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
        balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        addMinter(account: string, overrides?: CallOverrides): Promise<void>;
        renounceMinter(overrides?: CallOverrides): Promise<void>;
        setApprovalForAll(to: string, approved: boolean, overrides?: CallOverrides): Promise<void>;
        isMinter(account: string, overrides?: CallOverrides): Promise<boolean>;
        isApprovedForAll(owner: string, operator: string, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "MinterAdded(address)"(account?: string | null): MinterAddedEventFilter;
        MinterAdded(account?: string | null): MinterAddedEventFilter;
        "MinterRemoved(address)"(account?: string | null): MinterRemovedEventFilter;
        MinterRemoved(account?: string | null): MinterRemovedEventFilter;
        "Transfer(address,address,uint256)"(from?: string | null, to?: string | null, tokenId?: BigNumberish | null): TransferEventFilter;
        Transfer(from?: string | null, to?: string | null, tokenId?: BigNumberish | null): TransferEventFilter;
        "Approval(address,address,uint256)"(owner?: string | null, approved?: string | null, tokenId?: BigNumberish | null): ApprovalEventFilter;
        Approval(owner?: string | null, approved?: string | null, tokenId?: BigNumberish | null): ApprovalEventFilter;
        "ApprovalForAll(address,address,bool)"(owner?: string | null, operator?: string | null, approved?: null): ApprovalForAllEventFilter;
        ApprovalForAll(owner?: string | null, operator?: string | null, approved?: null): ApprovalForAllEventFilter;
    };
    estimateGas: {
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        approve(to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transferFrom(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        mint(to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "safeTransferFrom(address,address,uint256)"(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: string, to: string, tokenId: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        addMinter(account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        renounceMinter(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setApprovalForAll(to: string, approved: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        isMinter(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        isApprovedForAll(owner: string, operator: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transferFrom(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        mint(to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "safeTransferFrom(address,address,uint256)"(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: string, to: string, tokenId: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOf(owner: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addMinter(account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        renounceMinter(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setApprovalForAll(to: string, approved: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        isMinter(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isApprovedForAll(owner: string, operator: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=KIP17Mintable.d.ts.map