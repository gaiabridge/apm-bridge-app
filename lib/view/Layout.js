"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
class Layout {
    constructor() {
        Layout.current = this;
        skynode_1.BodyNode.append((this.container = (0, skynode_1.el)(".layout", (0, skynode_1.el)("header", (0, skynode_1.el)("img.apm-bridge-logo", { src: "/images/shared/img/img-logo-apmbridge.svg", alt: "apM Bridge logo" }), (0, skynode_1.el)("img.gaia-bridge-logo", { src: "/images/shared/img/img-gaia-bridge-logo-horizontal.png", alt: "gaia Bridge logo" })), (0, skynode_1.el)("main", (this.content = (0, skynode_1.el)(".content"))), (0, skynode_1.el)("footer", (0, skynode_1.el)(".copyright", "© apM Coin X GaiaProtocol."), (0, skynode_1.el)(".sns", (0, skynode_1.el)("a.item", "Gaia Discord", {
            href: "https://discord.com/invite/SjM4meh3hd",
            target: "_blank",
        }), (0, skynode_1.el)("a.item", "apM Web", {
            href: "https://apm-coin.com/",
            target: "_blank",
        }))))));
    }
    set title(title) {
        //document.title = `${title} | apM Bridge`;
        document.title = `apM Bridge`;
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = Layout;
//# sourceMappingURL=Layout.js.map