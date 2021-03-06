export default {
    chainId: 8217,
    oracleHosts: [
        "bridge-api1.apm-bridge.com:8080",
        "bridge-api3.apm-bridge.com:8080",
        "bridge-api2.apm-bridge.com:8080",
    ],
    contracts: {
        APMCoin: "0xc8c424b91d8ce0137bab4b832b7f7d154156ba6c",
        APMReservoir: "0x73427B5601eC634879d2Fd846654c317B4c4ee09",
        KAPMCoin: "0x4ec5e1c092f9c40d1e9be5744feddb23935232e9",
        KAPMReservoir: "0xe62bC2da4342040D9230c099D74Ff3756BD3862D",
    },
    discountUsers: [
        //"0xE7E7fc27aE4a9Cd1EDE050978189623d730f23D7",
        //"0x07cCB56b292AC76dF58B5d4bF47Be56372B465bf",
    ],
    //discountNFTs: ["0xBb915237D8b46Dcdfe813c914Bf98708e0dAd84A"],
};
