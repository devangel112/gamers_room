const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('random')
		.setDescription('Genera un número aleatorio'),
	async execute(interaction) {
		await interaction.reply(`${Math.floor(Math.random() * 2147483647)}`);
	},
};