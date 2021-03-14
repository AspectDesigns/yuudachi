import { Command } from "discord-akairo";
import { Message } from "discord.js";

export default class IntroCommand extends Command {
    public constructor() {
        super("intro", {
            aliases: ["intro", "greeting"]
        })
    }

    public exec(message: Message) {
        if (message.member.roles.cache.has("808532880032268288")) {

        } else {
            message.util?.send("No.")
        }
    }
}