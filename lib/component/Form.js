"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
class Form extends skynode_1.DomNode {
    constructor(swaper, chainId, isFrom = false) {
        super("form");
        this.swaper = swaper;
        this.chainId = chainId;
        this.isFrom = isFrom;
        this.append(this.chainIcon = (0, skynode_1.el)("img", { src: "/images/shared/icn/icn-klaytn.svg", alt: "chain image" }), (0, skynode_1.el)("p", "FROM"), this.chainSelect = (0, skynode_1.el)("select", (0, skynode_1.el)("option", "Klaytn"), (0, skynode_1.el)("option", "Ethereum"), {
            change: () => {
                const originChainId = this.chainId;
                this.changeChain(parseInt(this.chainSelect.domElement.value, 10));
                this.fireEvent("changeChain", this.chainId, originChainId);
            },
        }), isFrom ? (0, skynode_1.el)("a", "Connect wallet") : (0, skynode_1.el)("p", "qoifhj...dfjkbq"));
        this.changeChain(chainId);
    }
    async changeChain(chainId) {
        this.chainId = chainId;
        this.chainSelect.domElement.value = String(chainId);
        if (chainId === 8217) {
            this.chainIcon.domElement.src = "/images/shared/icn/icn-klaytn.svg";
        }
        else if (chainId === 1) {
            this.chainIcon.domElement.src = "/images/shared/icn/icn-ethereum.svg";
        }
        else if (chainId === 137) {
            this.chainIcon.domElement.src = "/images/shared/icn/icn-polygon.svg";
        }
    }
}
exports.default = Form;
//# sourceMappingURL=Form.js.map