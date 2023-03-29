const { Events, ActivityType } = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		console.log(`Loaded successfully and logged in as ${client.user.tag}`);
        client.user.setPresence({
            activities: [{ name: `a ser basado`, type: ActivityType.Playing }],
        });
	},
};