import { DomNode, el, Popup } from "@hanul/skynode";

export default class ConfirmingPopup extends Popup {

    public content: DomNode;

    constructor(retry: () => void) {
        super(".popup-background");
        this.append(
            this.content = el(".dialogue.confirming-popup",
                el("img", { src: "/images/shared/img/img-earth.png", alt: "earth" }),
                el("p", "이더리움 Block Confirm을 기다리는 중입니다... (약 8분 소요)"),
            ),
        );
        setTimeout(() => {
            this.delete();
            retry();
        }, 60000);
    }
}
