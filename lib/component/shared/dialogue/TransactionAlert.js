"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
class TransactionAlert extends skynode_1.Popup {
    constructor(message) {
        super(".popup-background");
        this.append(this.content = (0, skynode_1.el)(".dialogue.transaction-alert", (0, skynode_1.el)("img", { src: "/images/shared/img/img-earth.png", alt: "earth" }), (0, skynode_1.el)("p", message)));
    }
}
exports.default = TransactionAlert;
//# sourceMappingURL=TransactionAlert.js.map