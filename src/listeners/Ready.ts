import { Listener } from "discord-akairo";

import * as chalk from "chalk";
import { TriggerEvent } from "../Auto/TriggerEvent";

export default class ReadyListener extends Listener {
    public constructor() {
        super("ready", {
            category: "client",
            emitter: "client",
            event: "ready"
        });
    }

    public exec() {
        TriggerEvent("CLIENT", `Event "ready" triggered at ${new Date().toLocaleString()}`)
    } 
}