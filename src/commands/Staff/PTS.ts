import { Command } from "discord-akairo";
import { Channel } from "discord.js";
import { MessageEmbed } from "discord.js";
import { TextChannel } from "discord.js";
import { GuildMember } from "discord.js";
import { Message } from "discord.js";
import { OWNERS } from "../../Config";

export default class extends Command {
    public constructor() {
        super("pts", {
            aliases: ["pts", "permissiontospeak"],
            args: [
                {
                    id: "user",
                    type: "member",
                    prompt: {
                        start: "What user do you want to ask for Permission to Speak?",
                        retries: 0,
                        cancel: "Cancelling..."
                    }
                },
                {
                    id: "channel",
                    type: "textChannel",
                    
                }
            ]
        });
    }

    public exec(message: Message, { user, channel }: { user: GuildMember, channel?: TextChannel }) {
        message.delete();

        if (message.member.roles.cache.has("808532880032268288") || OWNERS.includes(message.author.id)) {
            if ((message.channel as TextChannel).parent.id === "808533020697034782") {
                const embed: MessageEmbed = new MessageEmbed()
                    .setTitle("PTS Request")
                    .setDescription(`${user}, ${message.author} requested Permission to Speak.`)
                    .setTimestamp(this.client.readyTimestamp)
                    .setFooter("Made by PossiblySebo#0001 | AD(tm) 2020, all rights reserved")
                message.util?.send(`${user}`, embed)
            } else {
                
            }
        } else {
            message.util?.send("No.")
        }
    }
}