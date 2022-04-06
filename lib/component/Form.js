"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const ethers_1 = require("ethers");
const CommonUtil_1 = __importDefault(require("../CommonUtil"));
const APMReservoirContract_1 = __importDefault(require("../contract/APMReservoirContract"));
const KAPMReservoirContract_1 = __importDefault(require("../contract/KAPMReservoirContract"));
const EthereumWallet_1 = __importDefault(require("../ethereum/EthereumWallet"));
const KlaytnWallet_1 = __importDefault(require("../klaytn/KlaytnWallet"));
class Form extends skynode_1.DomNode {
    constructor(swaper, chainId, isFrom = false) {
        super("form");
        this.swaper = swaper;
        this.chainId = chainId;
        this.isFrom = isFrom;
        this.connectHandler = async () => {
            this.fireEvent("connect");
            this.loadBalance();
        };
        this.transferHandler = async (from, to) => {
            const owner = await this.sender?.loadAddress();
            if (from === owner || to === owner) {
                this.loadBalance();
            }
        };
        this.approvalHandler = async (from, to) => {
            const owner = await this.sender?.loadAddress();
            if (from === owner && to === this.sender?.address) {
                this.fireEvent("approved");
            }
        };
        this.sendHandler = async (sender, toChainId, receiver, amount, sendingId) => {
            if (this.chainId !== 1) {
                this.swaper.receive(sender, toChainId, receiver, sendingId, amount);
            }
            const owner = await this.sender?.loadAddress();
            if (sender === owner) {
                this.swaper.addSended(sender, receiver, sendingId);
            }
        };
        this.append(this.chainIcon = (0, skynode_1.el)("img", { src: "/images/shared/icn/icn-klaytn.svg", alt: "chain image" }), this.isFrom ? (0, skynode_1.el)("p", "FROM\n(보내는 체인)") : (0, skynode_1.el)("p", "TO\n(받는 체인)"), this.chainSelect = (0, skynode_1.el)("select", (0, skynode_1.el)("option", "Klaytn", { value: "8217" }), (0, skynode_1.el)("option", "Ethereum", { value: "1" }), {
            change: () => {
                const originChainId = this.chainId;
                this.changeChain(parseInt(this.chainSelect.domElement.value, 10));
                this.fireEvent("changeChain", this.chainId, originChainId);
            },
        }), (this.balanceDisplay = (0, skynode_1.el)("p")), (0, skynode_1.el)(".address-container", (this.addressDisplay = (0, skynode_1.el)("p"))), (this.buttonContainer = (0, skynode_1.el)(".button-container")));
        this.changeChain(chainId);
    }
    async changeChain(chainId) {
        this.chainId = chainId;
        this.chainSelect.domElement.value = String(chainId);
        this.sender?.off("connect", this.connectHandler);
        this.sender?.off("Transfer", this.transferHandler);
        this.sender?.off("SendToken", this.sendHandler);
        this.sender?.off("Approval", this.approvalHandler);
        if (chainId === 8217) {
            this.sender = KAPMReservoirContract_1.default;
            this.chainIcon.domElement.src = "/images/shared/icn/icn-klaytn.svg";
            const address = await KlaytnWallet_1.default.loadAddress();
            if (address !== undefined) {
                this.addressDisplay.empty().appendText(CommonUtil_1.default.shortenAddress(address));
            }
            else {
                this.addressDisplay.empty();
            }
        }
        else if (chainId === 1) {
            this.sender = APMReservoirContract_1.default;
            this.chainIcon.domElement.src = "/images/shared/icn/icn-ethereum.svg";
            const address = await EthereumWallet_1.default.loadAddress();
            if (address !== undefined) {
                this.addressDisplay.empty().appendText(CommonUtil_1.default.shortenAddress(address));
            }
            else {
                this.addressDisplay.empty();
            }
        }
        await this.loadBalance();
        this.sender?.on("connect", this.connectHandler);
        this.sender?.on("Transfer", this.transferHandler);
        this.sender?.on("SendToken", this.sendHandler);
        this.sender?.on("Approval", this.approvalHandler);
    }
    async loadBalance() {
        this.buttonContainer.empty();
        if (this.sender !== undefined) {
            const owner = await this.sender.loadAddress();
            if (owner !== undefined) {
                const balance = await this.sender.balanceOf(owner);
                this.balanceDisplay
                    .empty()
                    .appendText(`${ethers_1.utils.formatUnits(balance)} APM`);
                this.buttonContainer.empty().append((0, skynode_1.el)("a.add-token-to-wallet-button", "지갑에 토큰 추가하기", {
                    click: () => {
                        this.sender?.addTokenToWallet();
                    },
                }));
            }
            else {
                this.balanceDisplay.empty().appendText("잔액 불러오기 실패");
                this.buttonContainer.empty().append((0, skynode_1.el)("a.connect-button", "지갑 연결", {
                    click: () => this.sender?.connect(),
                }));
            }
        }
    }
    delete() {
        this.sender?.off("connect", this.connectHandler);
        this.sender?.off("Transfer", this.transferHandler);
        this.sender?.off("SendToken", this.sendHandler);
        this.sender?.off("Approval", this.approvalHandler);
        super.delete();
    }
}
exports.default = Form;
//# sourceMappingURL=Form.js.map