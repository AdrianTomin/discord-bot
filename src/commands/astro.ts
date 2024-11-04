import { SlashCommandBuilder, SlashCommandStringOption, EmbedBuilder } from 'discord.js';
import { ChatInputCommandInteraction } from 'discord.js/typings';

import { fetchForecast } from '../requests/fetchForecast.ts';

const astroData = new SlashCommandBuilder()
	.setName('astro')
	.setDescription('Replies with the astronomical information for the day!')
	.addStringOption((option: SlashCommandStringOption) => {
		return option
			.setName('location')
			.setDescription('The location can be a city, zip/postal code, or a latitude and longitude.')
			.setRequired(true);
	});

const executeAstroCommand = async (interaction: ChatInputCommandInteraction): Promise<void> => {
	await interaction.deferReply();

	const location = String(interaction.options.getString('location'));


	const { weatherData, locationName } = await fetchForecast(location);
	try {

		const embed = new EmbedBuilder()
			.setColor(0x3f704d)
			.setTitle(`Astronomical forecast for ${locationName}...`)
			.setTimestamp()
			.setFooter({
				text: 'Powered by the weatherapi.com API :)',
			});

		for (const day of weatherData) {


			const fields: any = {
				name: day.date,
				value:
					`
					🌄 Sunrise ${day.sunriseTime}\n
					🌆 Sunset ${day.sunsetTime}\n
					🌔 Moonrise ${day.moonRiseTime}\n
					🌘 Moonset ${day.moonSetTime}\n
					`,
			};

			embed.addFields(fields);
		}

		await interaction.editReply({
			embeds: [
				embed,
			],
		} as any);
	} catch (error: Error) {
		await interaction.editReply(error.message);
		throw new Error(`Error fetching forecast for ${locationName}`);
	}
};

export {
	astroData,
	executeAstroCommand,
};
