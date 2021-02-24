import BotClient from "./client/BotClient";
import { PREFIX, TOKEN } from "./Config";

const client: BotClient = new BotClient({token: TOKEN, prefix: PREFIX});

client.login(TOKEN);
