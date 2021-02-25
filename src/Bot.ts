import { Listener } from "discord-akairo";
import { TriggerEvent } from "./Auto/TriggerEvent";
import BotClient from "./client/BotClient";
import { PREFIX, TOKEN } from "./Config";

const client: BotClient = new BotClient({token: TOKEN, prefix: PREFIX});

client.listenerHandler.on("load", (listener: Listener) => {
    TriggerEvent("INFO", `Loaded ${listener.event}.`)
});

client.login(TOKEN);
