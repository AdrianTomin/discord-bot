import { SlashCommandBuilder, SlashCommandStringOption, EmbedBuilder } from 'discord.js';
import { ChatInputCommandInteraction } from 'discord.js/typings';

import { fetchForecast } from '../requests/fetchForecast.ts';

const forecastData = new SlashCommandBuilder()
	.setName('forecast')
	.setDescription('Replies with the weather forecast!')
	.addStringOption((option: SlashCommandStringOption) => {
		return option
			.setName('location')
			.setDescription('The location can be a city, zip/postal code, or a latitude and longitude.')
			.setRequired(true);
	})
	.addStringOption((option: SlashCommandStringOption) => {
		return option
			.setName('units')
			.setDescription('The unit system of the results: which can either be "metric" or "imperial".')
			.setRequired(false)
			.addChoices([
				{ name: 'Metric', value: 'metric' },
				{ name: 'Imperial', value: 'imperial' },
			] as any);
	});

const executeForecastCommand = async (interaction: ChatInputCommandInteraction): Promise<void> => {
	await interaction.deferReply();

	const location = String(interaction.options.getString('location'));
	const units = interaction.options.getString('units') || 'metric';
	const isMetric = units === 'metric';

	const { weatherData, locationName } = await fetchForecast(location);
	try {

		const embed = new EmbedBuilder()
			.setColor(0x3f704d)
			.setTitle(`Weather forecast for ${locationName}...`)
			.setDescription(`Using the ${units} system.`)
			.setTimestamp()
			.setFooter({
				text: 'Powered by the weatherapi.com API :)',
			});

		for (const day of weatherData) {
			const minTemp = isMetric ? day.temperatureMinC : day.temperatureMinF;
			const maxTemp = isMetric ? day.temperatureMaxC : day.temperatureMaxF;

			const fields: any = {
				name: day.date,
				value: `⬇️ Low: ${minTemp}°, ⬆️ High: ${maxTemp}°`,
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
	forecastData,
	executeForecastCommand,
};
