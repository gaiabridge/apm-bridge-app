"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
class ConfirmingPopup extends skynode_1.Popup {
    constructor(retry) {
        super(".popup-background");
        this.append(this.content = (0, skynode_1.el)(".dialogue.confirming-popup", (0, skynode_1.el)("img", { src: "/images/shared/img/img-earth.png", alt: "earth" }), (0, skynode_1.el)("p", "이더리움 Block Confirm을 기다리는 중입니다... (약 8분 소요)")));
        setTimeout(() => {
            this.delete();
            retry();
        }, 60000);
    }
}
exports.default = ConfirmingPopup;
//# sourceMappingURL=ConfirmingPopup.js.map