import { Listener } from "discord-akairo";
import { TriggerEvent } from "./Auto/TriggerEvent";
import BotClient from "./client/BotClient";
import { PREFIX, TOKEN } from "./Config";
import { TextChannel } from "discord.js";
import { MessageEmbed } from "discord.js";
import { VoiceState } from "discord.js";

const client: BotClient = new BotClient({token: TOKEN, prefix: PREFIX});

client.on("voiceStateUpdate", (oldState: VoiceState, newState: VoiceState) => {
    if (oldState?.channel?.name === newState?.channel?.name) return;

    const VoiceStateLogChannel: TextChannel = (client.channels.cache.get("820039349591736381") as TextChannel);

    const embed: MessageEmbed = new MessageEmbed()
        .setAuthor("Yuudachi", client.user.displayAvatarURL())
        .addField("User", `${oldState.member}`, true)
        .addField("Old State", `${oldState?.channel?.name ? "#" + oldState?.channel?.name : "None"}`, true)
        .addField("New State", `${newState?.channel?.name ? "#" + newState?.channel?.name : "None"}`, true)
        .setFooter("blood was shed while making this bot. donate to me. make ticket 4 more info,")
    ;

    VoiceStateLogChannel.send(embed)
});

client.login(TOKEN);


