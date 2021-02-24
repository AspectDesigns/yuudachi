import { MessageEmbed } from "discord.js";

export const SetCopyrightFooter = (embed: MessageEmbed): void | Promise<void> => {
    embed.setFooter("Property of PossiblySebo#0001, Licensed to Knight Network, Copyright 2020, all rights reserved.")
}