import { DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import msg from "msg.js";
import Layout from "./Layout";
import Form from "../component/Form";
import Swaper from "../component/Swaper";

export default class Mining implements View {

    private container: DomNode;

    constructor() {
        Layout.current.title = "Home";
        Layout.current.content.append(
            this.container = el(".home-view",
                new Swaper(),
            ),
        );
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}