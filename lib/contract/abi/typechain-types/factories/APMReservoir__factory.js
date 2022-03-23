"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APMReservoir__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_token",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_quorum",
                type: "uint256",
            },
            {
                internalType: "address[]",
                name: "_signers",
                type: "address[]",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
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
        name: "AddSigner",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
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
                name: "isFeeCollected",
                type: "bool",
            },
        ],
        name: "SendToken",
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
        inputs: [
            {
                internalType: "address",
                name: "signer",
                type: "address",
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
        name: "addSigner",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
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
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
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
        inputs: [],
        name: "owner",
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
                internalType: "address",
                name: "nft",
                type: "address",
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
                internalType: "address",
                name: "signer",
                type: "address",
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
        name: "removeSigner",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "renounceOwnership",
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
                internalType: "address",
                name: "nft",
                type: "address",
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
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "sendingData",
        outputs: [
            {
                internalType: "uint256",
                name: "sendedAmount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "sendingBlock",
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
                name: "",
                type: "address",
            },
        ],
        name: "signerIndex",
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
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "signers",
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
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IFeeDB",
                name: "newDB",
                type: "address",
            },
        ],
        name: "updateFeeDB",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "newQuorum",
                type: "uint256",
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
        name: "updateQuorum",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x60806040523480156200001157600080fd5b5060405162001c0a38038062001c0a833981016040819052620000349162000300565b6200003f33620001fc565b6001600160a01b0383166200005357600080fd5b600680546001600160a01b0319166001600160a01b038516179055816200007957600080fd5b60048290556040518281527f5cb3f38de4dd795897ed02809e482378027c600f566d6e4bd14dfe3a44a6d7379060200160405180910390a18181511015620000c057600080fd5b8051620000d59060019060208401906200024c565b5060005b8151811015620001f2576000828281518110620000fa57620000fa620003f2565b6020026020010151905060006001600160a01b0316816001600160a01b031614156200012557600080fd5b6001600160a01b038116600090815260026020526040902054156200014957600080fd5b81156200018d5782600081518110620001665762000166620003f2565b60200260200101516001600160a01b0316816001600160a01b031614156200018d57600080fd5b6001600160a01b03811660008181526002602090815260409182902085905590519182527f637c77a2d598a51d085d4a2413332c45a235a25ee855bf3dfcdc2c8fcf02860f910160405180910390a15080620001e98162000408565b915050620000d9565b5050505062000432565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b828054828255906000526020600020908101928215620002a4579160200282015b82811115620002a457825182546001600160a01b0319166001600160a01b039091161782556020909201916001909101906200026d565b50620002b2929150620002b6565b5090565b5b80821115620002b25760008155600101620002b7565b80516001600160a01b0381168114620002e557600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b6000806000606084860312156200031657600080fd5b6200032184620002cd565b60208581015160408701519295509350906001600160401b03808211156200034857600080fd5b818701915087601f8301126200035d57600080fd5b815181811115620003725762000372620002ea565b8060051b604051601f19603f830116810181811085821117156200039a576200039a620002ea565b60405291825284820192508381018501918a831115620003b957600080fd5b938501935b82851015620003e257620003d285620002cd565b84529385019392850192620003be565b8096505050505050509250925092565b634e487b7160e01b600052603260045260246000fd5b60006000198214156200042b57634e487b7160e01b600052601160045260246000fd5b5060010190565b6117c880620004426000396000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c8063715018a6116100ad5780638da5cb5b116100715780638da5cb5b146102b1578063b707f841146102c2578063d14f36f1146102d5578063f2fde38b14610312578063fc0c546a1461032557600080fd5b8063715018a614610257578063779780ea1461025f5780637df73e27146102725780638053f79c1461029557806382ac4168146102a857600080fd5b8063479e517d116100f4578063479e517d146101b5578063488c3f5e146101c85780634d74ce2e146102095780635ecdf245146102315780636b3f599b1461024457600080fd5b806315b51058146101315780631703a018146101465780631a91a0ab146101625780632079fb9a1461018257806341f684f3146101ad575b600080fd5b61014461013f3660046113a1565b610338565b005b61014f60045481565b6040519081526020015b60405180910390f35b61014f61017036600461148b565b60026020526000908152604090205481565b6101956101903660046114a8565b6104d2565b6040516001600160a01b039091168152602001610159565b60015461014f565b6101446101c33660046114c1565b6104fc565b61014f6101d636600461155c565b6001600160a01b039283166000908152600760209081526040808320948352938152838220929094168152925290205490565b61021c61021736600461159e565b610646565b60408051928352602083019190915201610159565b61014461023f36600461148b565b61069d565b600554610195906001600160a01b031681565b610144610724565b61014461026d3660046115e6565b61075a565b61028561028036600461148b565b61082b565b6040519015158152602001610159565b6101446102a33660046114c1565b610887565b61014f60035481565b6000546001600160a01b0316610195565b61014f6102d036600461161b565b610a8c565b6102856102e336600461159e565b600860209081526000948552604080862082529385528385208152918452828420909152825290205460ff1681565b61014461032036600461148b565b610bb5565b600654610195906001600160a01b031681565b6001600160a01b03808b1660009081526008602090815260408083208d84528252808320938c1683529281528282208983529052205460ff161561037b57600080fd5b6040805160208082018c90526bffffffffffffffffffffffff1960608e811b8216848601524660548501528c811b82166074850152608884018c905260a884018b905289151560f81b60c885015288901b1660c9830152825180830360bd01815260dd83019093528251920191909120906000906103fd90839060fd01611665565b60405160208183030381529060405280519060200120905061042181868686610c50565b6001600160a01b03808d1660009081526008602090815260408083208f84528252808320938e1683529281528282208b8352905220805460ff1916600117905561046d8a8a8989610d02565b896001600160a01b03168b8d6001600160a01b03167fda4355117ec65be2104e66a73b0d7e9de15423bd5e7d494d50539dd066d0fbde8c8c6040516104bc929190918252602082015260400190565b60405180910390a4505050505050505050505050565b600181815481106104e257600080fd5b6000918252602090912001546001600160a01b0316905081565b6001600160a01b03841661050f57600080fd5b6105188461082b565b1561052257600080fd5b6003805460009146919083610536836116ac565b909155506040516830b23229b4b3b732b960b91b60208201526029810192909252604982015260690160405160208183030381529060405280519060200120905060008160405160200161058a9190611665565b6040516020818303038152906040528051906020012090506105ae81868686610c50565b600180546001600160a01b03881660008181526002602090815260408083208590558486018655949091527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf690920180546001600160a01b0319168217905591519182527f637c77a2d598a51d085d4a2413332c45a235a25ee855bf3dfcdc2c8fcf02860f91015b60405180910390a1505050505050565b6007602052836000526040600020602052826000526040600020602052816000526040600020818154811061067a57600080fd5b600091825260209091206002909102018054600190910154909450925084915050565b6000546001600160a01b031633146106d05760405162461bcd60e51b81526004016106c7906116c7565b60405180910390fd5b600580546001600160a01b0319166001600160a01b0383169081179091556040519081527fa9833f88e240d8eb1b2a6dbaf83b80884401ce7f7a972a9352538d966e1ba6279060200160405180910390a150565b6000546001600160a01b0316331461074e5760405162461bcd60e51b81526004016106c7906116c7565b6107586000610e3e565b565b6000841161076757600080fd5b600380546000914691908361077b836116ac565b909155506040516b75706461746551756f72756d60a01b6020820152602c810192909252604c820152606c016040516020818303038152906040528051906020012090506000816040516020016107d29190611665565b6040516020818303038152906040528051906020012090506107f681868686610c50565b60048690556040518681527f5cb3f38de4dd795897ed02809e482378027c600f566d6e4bd14dfe3a44a6d73790602001610636565b6001600160a01b0381166000908152600260205260408120541515806108815750816001600160a01b0316600160008154811061086a5761086a6116fc565b6000918252602090912001546001600160a01b0316145b92915050565b6001600160a01b03841661089a57600080fd5b6108a38461082b565b6108ac57600080fd5b60038054600091469190836108c0836116ac565b909155506040516b3932b6b7bb32a9b4b3b732b960a11b6020820152602c810192909252604c820152606c016040516020818303038152906040528051906020012090506000816040516020016109179190611665565b60405160208183030381529060405280519060200120905061093b81868686610c50565b6000610951600161094b60015490565b90610e8e565b905060045481101561096257600080fd5b6001600160a01b038716600090815260026020526040902054818114610a0157600060018381548110610997576109976116fc565b600091825260209091200154600180546001600160a01b0390921692508291849081106109c6576109c66116fc565b600091825260208083209190910180546001600160a01b0319166001600160a01b039485161790559290911681526002909152604090208190555b6001805480610a1257610a12611712565b60008281526020808220600019908401810180546001600160a01b03191690559092019092556001600160a01b038a168083526002825260408084209390935591519182527f1803740ef72fc16e647c10fe2d31cf61a1578081960c2e3fb7f5aa957e82f550910160405180910390a15050505050505050565b33600090815260076020908152604080832087845282528083206001600160a01b03878116855281845282852080549285528351808501855288815243818701908152600180860184559288528688209151600286029092019182555191015560055483516342d6750360e11b815293519295949116926385acea0692600480830193928290030181865afa158015610b29573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b4d9190611728565b9050610b5b33858386610ea1565b60408051858152602081018490528215158183015290516001600160a01b03871691889133917fec47c11127a4fc4eea1866690010369bc0f14d7c82e42c7590841f88440d569f919081900360600190a450949350505050565b6000546001600160a01b03163314610bdf5760405162461bcd60e51b81526004016106c7906116c7565b6001600160a01b038116610c445760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016106c7565b610c4d81610e3e565b50565b8251825181148015610c625750815181145b610c6b57600080fd5b600454811015610c7a57600080fd5b60005b81811015610cfa57610cdf61028087878481518110610c9e57610c9e6116fc565b6020026020010151878581518110610cb857610cb86116fc565b6020026020010151878681518110610cd257610cd26116fc565b6020026020010151610f99565b610ce857600080fd5b80610cf2816116ac565b915050610c7d565b505050505050565b600082610db2576000610d1686868561111e565b90925090508115801590610d3257506001600160a01b03811615155b15610db05760065460405163a9059cbb60e01b81526001600160a01b038381166004830152602482018590529091169063a9059cbb906044016020604051808303816000875af1158015610d8a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dae9190611728565b505b505b6006546001600160a01b031663a9059cbb86610dce8785610e8e565b6040516001600160e01b031960e085901b1681526001600160a01b03909216600483015260248201526044015b6020604051808303816000875af1158015610e1a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cfa9190611728565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000610e9a8284611745565b9392505050565b60008215610f5a576000610eb686868561111e565b90925090508115801590610ed257506001600160a01b03811615155b15610f58576006546040516323b872dd60e01b81526001600160a01b038881166004830152838116602483015260448201859052909116906323b872dd906064016020604051808303816000875af1158015610f32573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f569190611728565b505b505b6006546040516323b872dd60e01b81526001600160a01b03878116600483015230602483015260448201879052909116906323b872dd90606401610dfb565b60007f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a082111561100b5760405162461bcd60e51b815260206004820152601b60248201527f696e76616c6964207369676e6174757265202773272076616c7565000000000060448201526064016106c7565b8360ff16601b148061102057508360ff16601c145b61106c5760405162461bcd60e51b815260206004820152601b60248201527f696e76616c6964207369676e6174757265202776272076616c7565000000000060448201526064016106c7565b60408051600081526020810180835287905260ff861691810191909152606081018490526080810183905260019060a0016020604051602081039080840390855afa1580156110bf573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166111165760405162461bcd60e51b8152602060048201526011602482015270696e76616c6964207369676e617475726560781b60448201526064016106c7565b949350505050565b60055460405163f257fbcb60e01b81526001600160a01b038581166004830152602482018590528381166044830152600092839291169063f257fbcb90606401602060405180830381865afa15801561117b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061119f919061175c565b9150600560009054906101000a90046001600160a01b03166001600160a01b03166364df049e6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156111f4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112189190611775565b9050935093915050565b6001600160a01b0381168114610c4d57600080fd5b803561124281611222565b919050565b8015158114610c4d57600080fd5b803561124281611247565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561129f5761129f611260565b604052919050565b600067ffffffffffffffff8211156112c1576112c1611260565b5060051b60200190565b600082601f8301126112dc57600080fd5b813560206112f16112ec836112a7565b611276565b82815260059290921b8401810191818101908684111561131057600080fd5b8286015b8481101561133b57803560ff8116811461132e5760008081fd5b8352918301918301611314565b509695505050505050565b600082601f83011261135757600080fd5b813560206113676112ec836112a7565b82815260059290921b8401810191818101908684111561138657600080fd5b8286015b8481101561133b578035835291830191830161138a565b6000806000806000806000806000806101408b8d0312156113c157600080fd5b6113ca8b611237565b995060208b013598506113df60408c01611237565b975060608b0135965060808b013595506113fb60a08c01611255565b945061140960c08c01611237565b935060e08b013567ffffffffffffffff8082111561142657600080fd5b6114328e838f016112cb565b94506101008d013591508082111561144957600080fd5b6114558e838f01611346565b93506101208d013591508082111561146c57600080fd5b506114798d828e01611346565b9150509295989b9194979a5092959850565b60006020828403121561149d57600080fd5b8135610e9a81611222565b6000602082840312156114ba57600080fd5b5035919050565b600080600080608085870312156114d757600080fd5b84356114e281611222565b9350602085013567ffffffffffffffff808211156114ff57600080fd5b61150b888389016112cb565b9450604087013591508082111561152157600080fd5b61152d88838901611346565b9350606087013591508082111561154357600080fd5b5061155087828801611346565b91505092959194509250565b60008060006060848603121561157157600080fd5b833561157c81611222565b925060208401359150604084013561159381611222565b809150509250925092565b600080600080608085870312156115b457600080fd5b84356115bf81611222565b93506020850135925060408501356115d681611222565b9396929550929360600135925050565b600080600080608085870312156115fc57600080fd5b84359350602085013567ffffffffffffffff808211156114ff57600080fd5b6000806000806080858703121561163157600080fd5b84359350602085013561164381611222565b925060408501359150606085013561165a81611222565b939692955090935050565b7f19457468657265756d205369676e6564204d6573736167653a0a3332000000008152601c810191909152603c0190565b634e487b7160e01b600052601160045260246000fd5b60006000198214156116c0576116c0611696565b5060010190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052603160045260246000fd5b60006020828403121561173a57600080fd5b8151610e9a81611247565b60008282101561175757611757611696565b500390565b60006020828403121561176e57600080fd5b5051919050565b60006020828403121561178757600080fd5b8151610e9a8161122256fea2646970667358221220656ffec705e31c399c547fbe0d6081d1b5dc297a81db5713e6df341d96a021c564736f6c634300080c0033";
const isSuperArgs = (xs) => xs.length > 1;
class APMReservoir__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
        this.contractName = "APMReservoir";
    }
    deploy(_token, _quorum, _signers, overrides) {
        return super.deploy(_token, _quorum, _signers, overrides || {});
    }
    getDeployTransaction(_token, _quorum, _signers, overrides) {
        return super.getDeployTransaction(_token, _quorum, _signers, overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.APMReservoir__factory = APMReservoir__factory;
APMReservoir__factory.bytecode = _bytecode;
APMReservoir__factory.abi = _abi;
//# sourceMappingURL=APMReservoir__factory.js.map