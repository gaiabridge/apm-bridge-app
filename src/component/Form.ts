import { DomNode, el } from "@hanul/skynode"
import Swaper from "./Swaper";

export default class Form extends DomNode {
    private chainIcon: DomNode<HTMLImageElement>;
    private chainSelect: DomNode<HTMLSelectElement>;

    constructor(
        private swaper: Swaper,
        public chainId: number,
        private isFrom: boolean = false
    ) {
        super("form")
        this.append(
            this.chainIcon = el("img", { src: "/images/shared/icn/icn-klaytn.svg", alt: "chain image" }),
            el("p", "FROM"),
            this.chainSelect = el("select",
                el("option", "Klaytn"),
                el("option", "Ethereum"),
                {
                    change: () => {
                        const originChainId = this.chainId;
                        this.changeChain(parseInt(this.chainSelect.domElement.value, 10));
                        this.fireEvent("changeChain", this.chainId, originChainId);
                    },
                }
            ),
            isFrom ? el("a", "Connect wallet") : el("p", "qoifhj...dfjkbq")
        );
        this.changeChain(chainId);
    }

    public async changeChain(chainId: number) {
        this.chainId = chainId;
        this.chainSelect.domElement.value = String(chainId);

        if (chainId === 8217) {
            this.chainIcon.domElement.src = "/images/shared/icn/icn-klaytn.svg";
        } else if (chainId === 1) {
            this.chainIcon.domElement.src = "/images/shared/icn/icn-ethereum.svg";
        } else if (chainId === 137) {
            this.chainIcon.domElement.src = "/images/shared/icn/icn-polygon.svg";
        }
    }
}