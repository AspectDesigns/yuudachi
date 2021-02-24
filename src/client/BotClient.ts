import { AkairoClient } from "discord-akairo";
import { join } from "path";
import { Message, User } from "discord.js";
import { CommandHandler, ListenerHandler } from "discord-akairo";
import { OWNERS, PREFIX } from "../Config";
import { Listener } from "discord-akairo";

declare module "discord-akairo" {
    interface AkairoClient {
        commandHandler: CommandHandler;
        listenerHandler: ListenerHandler;
    }
}

interface BotOptions {
    token?: string;
    prefix?: string;
}

export default class BotClient extends AkairoClient {
    config: BotOptions;
    commandHandler: CommandHandler = new CommandHandler(this, {
        directory: join(__dirname, "..", "commands"),
        commandUtil: true,
        allowMention: true,
        blockBots: true,
        blockClient: true,
        handleEdits: true,
        commandUtilLifetime: 3e5,
        prefix: PREFIX,
    });

    listenerHandler: ListenerHandler = new ListenerHandler(this, {
        directory: join(__dirname, "..", "listeners"),
    })

    public constructor(config: BotOptions) {
        super({
            ownerID: OWNERS
        }, {
            disableMentions: "everyone"
        })

        this.commandHandler.loadAll();
        this.listenerHandler.loadAll();

        this.listenerHandler.on("load", (listener: Listener) => {
            console.log(`Loaded`)
        })
    }
}
