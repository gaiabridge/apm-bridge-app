"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IAPMReservoir__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "signer",
                type: "address",
            },
        ],
        name: "AddSigner",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "newReservoir",
                type: "address",
            },
        ],
        name: "Migrate",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "fromChainId",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "address",
                name: "receiver",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "sendingId",
                type: "uint256",
            },
        ],
        name: "ReceiveToken",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "signer",
                type: "address",
            },
        ],
        name: "RemoveSigner",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "toChainId",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "address",
                name: "receiver",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "sendingId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "bool",
                name: "isFeePayed",
                type: "bool",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "protocolFee",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "senderDiscountRate",
                type: "uint256",
            },
        ],
        name: "SendToken",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "chainId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "bool",
                name: "status",
                type: "bool",
            },
        ],
        name: "SetChainValidity",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "user",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "feeRecipient",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "TransferFee",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "contract IFeeDB",
                name: "newFeeDB",
                type: "address",
            },
        ],
        name: "UpdateFeeDB",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "newQuorum",
                type: "uint256",
            },
        ],
        name: "UpdateQuorum",
        type: "event",
    },
    {
        inputs: [],
        name: "feeDB",
        outputs: [
            {
                internalType: "contract IFeeDB",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getSigners",
        outputs: [
            {
                internalType: "address[]",
                name: "",
                type: "address[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "signer",
                type: "address",
            },
        ],
        name: "isSigner",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "fromChainId",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "receiver",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "sendingId",
                type: "uint256",
            },
        ],
        name: "isTokenReceived",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "toChainId",
                type: "uint256",
            },
        ],
        name: "isValidChain",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "quorum",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "fromChainId",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "receiver",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "sendingId",
                type: "uint256",
            },
            {
                internalType: "bool",
                name: "isFeePayed",
                type: "bool",
            },
            {
                internalType: "uint256",
                name: "protocolFee",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "senderDiscountRate",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
            {
                internalType: "uint8[]",
                name: "vs",
                type: "uint8[]",
            },
            {
                internalType: "bytes32[]",
                name: "rs",
                type: "bytes32[]",
            },
            {
                internalType: "bytes32[]",
                name: "ss",
                type: "bytes32[]",
            },
        ],
        name: "receiveToken",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "toChainId",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "receiver",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "sendToken",
        outputs: [
            {
                internalType: "uint256",
                name: "sendingId",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "toChainId",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "receiver",
                type: "address",
            },
        ],
        name: "sendingCounts",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "toChainId",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "receiver",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "sendingId",
                type: "uint256",
            },
        ],
        name: "sendingData",
        outputs: [
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "atBlock",
                type: "uint256",
            },
            {
                internalType: "bool",
                name: "isFeePayed",
                type: "bool",
            },
            {
                internalType: "uint256",
                name: "protocolFee",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "senderDiscountRate",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "signersLength",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "signingNonce",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "token",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
];
class IAPMReservoir__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IAPMReservoir__factory = IAPMReservoir__factory;
IAPMReservoir__factory.abi = _abi;
//# sourceMappingURL=IAPMReservoir__factory.js.map