const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Se supone que debe jalar con un pong :v'),
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};