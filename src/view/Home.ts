import { DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import msg from "msg.js";
import Layout from "./Layout";

export default class Mining implements View {

    private container: DomNode;

    private fromSelect: DomNode;
    private toSelect: DomNode;
    private amountInput: DomNode;

    private feeDisplay: DomNode;

    constructor() {
        Layout.current.title = "Home";
        Layout.current.content.append(
            this.container = el(".home-view",
                el("section.swap-container",
                    el(".form-container",
                        el("form",
                            el("img", { src: "/images/shared/icn/icn-klaytn.svg", alt: "chain image" }),
                            el("p", "FROM"),
                            this.fromSelect = el("select",
                                el("option", "Klaytn"),
                                el("option", "Ethereum"),
                            ),
                            el("p", "qoifhj...dfjkbq"),
                        ),
                        el("form",
                            el("img", { src: "/images/shared/icn/icn-ethereum.svg", alt: "chain image" }),
                            el("p", "FROM"),
                            this.toSelect = el("select",
                                el("option", "Klaytn"),
                                el("option", "Ethereum"),
                            ),
                            el("a", "Connect wallet"),
                        ),
                    ),
                    el(".amount-container",
                        el(".title", "Amount"),
                        el(".input-container",
                            this.amountInput = el("input"),
                        ),
                    ),
                    el(".fee-container",
                        el(".text-container",
                            el(".title", "Fees"),
                            el(".caption", "0.3% (Charged by Gaia Protocol)"),
                        ),
                        el(".text-container",
                            this.feeDisplay = el(".amount", this.numberWithCommas("30")),
                            el(".amount-caption", "APM"),
                        ),
                    ),
                    el(".received-container",
                        el(".text-container",
                            el(".title", "Estimated Received"),
                        ),
                        el(".text-container",
                            this.feeDisplay = el(".amount", this.numberWithCommas("9999999", 3)),
                            el(".amount-caption", "APM"),
                        )
                    ),
                    el(".warning-container",
                        el(".content",
                            el("img", { src: "/images/shared/icn/icn-warning.svg", alt: "icn-warning.svg" }),
                            el("p", "Gas costs are required for both chains to use the bridge."),
                        ),
                    ),
                    el(".button-container",
                        el(".content",
                            el("button.disable-button", "Approve"),
                            el("button", "Transfer"),
                        ),
                    ),
                ),
                el("section.history-container",
                    el(".title", "The historical records"),
                    el("p", "Once the transfer has started, Can’t cancel. Please ‘Retry’ if any transfers are missing."),
                    el("table",
                        el("thead",
                            el("tr",
                                el("td", "From Chain"),
                                el("td", "To Chain"),
                                el("td", "Amount"),
                                el("td", "Fee"),
                                el("td", "Time"),
                                el("td", "Status"),
                            ),
                        ),
                        el("tbody",
                            el("tr",
                                el("td",
                                    el(".chain-container",
                                        el("img", { src: "/images/shared/icn/icn-klaytn.svg", alt: "icn-klaytn" }),
                                        el("p", "Klaytn"),
                                    ),
                                ),
                                el("td",
                                    el(".chain-container",
                                        el("img", { src: "/images/shared/icn/icn-ethereum.svg", alt: "icn-ethereum" }),
                                        el("p", "Ethereum"),
                                    ),
                                ),
                                el("td",
                                    el("p", "30 APM"),
                                ),
                                el("td",
                                    el("p", "3 APM"),
                                ),
                                el("td",
                                    el("p", "2021-12-14 17:00:00"),
                                ),
                                el("td",
                                    el(".status-container",
                                        el("a", "Etherscan"),
                                        el("a", "Klaytnscope"),
                                    ),
                                ),
                            ),
                            el("tr",
                                el("td",
                                    el(".chain-container",
                                        el("img", { src: "/images/shared/icn/icn-ethereum.svg", alt: "icn-ethereum" }),
                                        el("p", "Ethereum"),
                                    ),

                                ),
                                el("td",
                                    el(".chain-container",
                                        el("img", { src: "/images/shared/icn/icn-klaytn.svg", alt: "icn-klaytn" }),
                                        el("p", "Klaytn"),
                                    ),
                                ),
                                el("td",
                                    el("p", "30 APM"),
                                ),
                                el("td",
                                    el("p", "3 APM"),
                                ),
                                el("td",
                                    el("p", "2021-12-14 17:00:00"),
                                ),
                                el("td",
                                    el("button", "Retry"),
                                ),
                            ),
                        ),
                    ),
                ),
            ),
        );
    }

    numberWithCommas(x: string, fixed = 3) {
        const parts = String(+(+x).toFixed(fixed)).split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}