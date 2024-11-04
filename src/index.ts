import { Client, Collection, Events, GatewayIntentBits } from 'discord.js';

import { pingData, executePingCommand } from './commands/ping';
import { forecastData, executeForecastCommand } from './commands/forecast';
import { astroData, executeAstroCommand } from './commands/astro';
import { clientReadyHandler } from './events/clientReady';
import { interactionCreateHandler } from './events/interactionCreateEvent';

const client = new Client({
	intents: GatewayIntentBits.Guilds,
});

// Initialize commands collection
client.commands = new Collection();

client.commands.set(pingData.name, {
	data: pingData,
	execute: executePingCommand,
});

client.commands.set(forecastData.name, {
	data: forecastData,
	execute: executeForecastCommand,
});

client.commands.set(astroData.name, {
	data: astroData,
	execute: executeAstroCommand,
});


client.once(Events.ClientReady, clientReadyHandler);
client.on(Events.InteractionCreate, interactionCreateHandler);

await client.login();
