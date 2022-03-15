import { DomNode, el, Popup } from "@hanul/skynode";

export default class TransactionAlert extends Popup {

    public content: DomNode;

    constructor(
        message: string,
    ) {
        super(".popup-background");
        this.append(
            this.content = el(".dialogue.transaction-alert",
                el("img", { src: "/images/shared/img/img-earth.png", alt: "earth" }),
                el("p", message),
            ),
        );
    }
}
