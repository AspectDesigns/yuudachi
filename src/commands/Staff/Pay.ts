import { Command } from "discord-akairo";
import { MessageEmbed } from "discord.js";
import { Message } from "discord.js";

export default class extends Command {
    public constructor() {
        super("pay", {
            aliases: ["paypal", "pay"],
            channel: "guild",
            args: [
                {
                    id: "amount",
                    type: "string"
                }
            ]
        });
    }

    public async  exec(message: Message, { amount }: { amount: string }) {
        if (message.member.roles.cache.has("808532880032268288")) {
            if (!amount) {
                return await message.util?.send(`Missing args: \`amount\` was not provided.`)
            }

            const embed: MessageEmbed = new MessageEmbed()
                .setAuthor(`${message.author.tag}`)
                .setTitle("Price Quote")
                .setDescription(
                    `Hello, customer. Your price quote for today will be ${amount}. If the currency does not match your region, convert it to your desired currency by clicking ` + 
                    `[here](https://www.google.com/search?q=currency+conversion&rlz=1C1SQJL_enUS906US906&oq=currency+conversion&aqs=chrome..69i57.2800j0j7&sourceid=chrome&ie=UTF-8).\n\n` + 
                    `Send this money by [clicking me](https://paypal.me/ChaseTheAmerican).`
                )
            ;

            return await message.util?.send(embed);
        } else {
            return await message.util?.send("No.");
        }
    }
}