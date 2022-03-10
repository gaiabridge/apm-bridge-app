import { BodyNode, DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";

export default class Layout implements View {

    public static current: Layout;
    private container: DomNode;
    public content: DomNode;

    constructor() {
        Layout.current = this;
        BodyNode.append(
            (this.container = el(".layout",
                el("header",
                    el("img.apm-bridge-logo", { src: "/images/shared/img/img-logo-apmbridge.svg", alt: "apM Bridge logo" }),
                    el("img.gaia-bridge-logo", { src: "/images/shared/img/img-gaia-bridge-logo-horizontal.png", alt: "gaia Bridge logo" }),
                ),
                el("main", (this.content = el(".content"))),
                el("footer",
                    el(".copyright", "© apM Coin X GaiaProtocol."),
                    el(".sns",
                        el("a.item", "Gaia Discord",
                            {
                                href: "https://github.com/chainhorizon",
                                target: "_blank",
                            }
                        ),
                        el("a.item", "apM Telegram",
                            {
                                href: "https://medium.com/chainhorizon",
                                target: "_blank",
                            }
                        ),
                        el("a.item", "apM Web",
                            {
                                href: "https://chainhorizon.org",
                                target: "_blank",
                            }
                        )
                    )
                ),
            )),
        );
    }

    public set title(title: string) {
        document.title = `${title} | Sky Boilerplate`;
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}