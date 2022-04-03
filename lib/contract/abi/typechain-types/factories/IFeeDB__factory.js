"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IFeeDB__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "newFee",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "address",
                name: "newRecipient",
                type: "address",
            },
        ],
        name: "UpdateFeeAndRecipient",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "nft",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "discountRate",
                type: "uint256",
            },
        ],
        name: "UpdateNFTDiscountRate",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "bool",
                name: "newType",
                type: "bool",
            },
        ],
        name: "UpdatePaysFeeWhenSending",
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
                internalType: "uint256",
                name: "discountRate",
                type: "uint256",
            },
        ],
        name: "UpdateUserDiscountRate",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "user",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "getFeeDataForReceive",
        outputs: [
            {
                internalType: "address",
                name: "_recipient",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_discountRate",
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
                name: "user",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "getFeeDataForSend",
        outputs: [
            {
                internalType: "bool",
                name: "_paysFeeWhenSending",
                type: "bool",
            },
            {
                internalType: "address",
                name: "_recipient",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_protocolFee",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_discountRate",
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
                name: "nft",
                type: "address",
            },
        ],
        name: "nftDiscountRate",
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
        name: "paysFeeWhenSending",
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
        name: "protocolFee",
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
        name: "protocolFeeRecipient",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "user",
                type: "address",
            },
        ],
        name: "userDiscountRate",
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
];
class IFeeDB__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IFeeDB__factory = IFeeDB__factory;
IFeeDB__factory.abi = _abi;
//# sourceMappingURL=IFeeDB__factory.js.map