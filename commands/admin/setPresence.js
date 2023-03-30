const { SlashCommandBuilder, ActivityType } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('set-presence')
		.setDescription('Chages the bot presence')
		.addNumberOption(option =>
			option.setName('type')
				.setDescription('Type of activity')
				.setRequired(true)
				.addChoices(
					{ name: 'Playing', value: ActivityType.Playing },
					{ name: 'Streaming', value: ActivityType.Streaming },
					{ name: 'Listening', value: ActivityType.Listening },
					{ name: 'Watching', value: ActivityType.Watching },
					{ name: 'Custom', value: ActivityType.Custom },
					{ name: 'Competing', value: ActivityType.Competing },
				))
		.addStringOption(option =>
			option.setName('text')
				.setDescription('Presence text')
				.setRequired(true))
		.addStringOption(option =>
			option.setName('status')
				.setDescription('Presence status')
				.setRequired(true)
				.addChoices(
					{ name: 'Online', value: 'online' },
					{ name: 'Idle', value: 'idle' },
					{ name: 'DND', value: 'dnd' },
					{ name: 'Offline', value: 'offline' },
				)),
	async execute(interaction) {
		if (interaction.user.id != process.env.DEVELOPER_ID) return await interaction.reply({ content: "You're not the bot owner to do this", ephemeral: true});
		await interaction.deferReply({
			ephemeral: true
		});
		const type = interaction.options.getNumber('type');
		const text = interaction.options.getString('text');
		const status = interaction.options.getString('status');
		interaction.client.changePresence(type, text, status);
		const newMessage = `Presence changed successfully.`;
		await interaction.editReply({
			content: newMessage,
			ephemeral: true
		});
	},
};