import {
	SlashCommandBuilder,
	ChatInputCommandInteraction,
} from 'discord.js';

const pingData = new SlashCommandBuilder()
	.setName('ping')
	.setDescription('Replies with Pong!');

const executePingCommand = async (interaction: ChatInputCommandInteraction): Promise<void> => {
	await interaction.reply('Pong!');
};

export {
	pingData,
	executePingCommand,
};
