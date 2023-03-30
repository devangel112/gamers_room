const { Events } = require('discord.js');
const users = require("../config/users.json");

module.exports = {
	name: Events.MessageCreate,
	async execute(message) {
		var guildExist = false;
		var userExistInGuild = false;
		if (message.author.bot) return false; 
        console.log(`Message from ${message.author.username}: ${message.content}`);
		users.guilds.forEach(guild => {
			if (guild.id == message.guild.id) {
				guildExist = true;
				guild.users.forEach(user => {
					if (user.id == message.author.id) {
						userExistInGuild = true;
						console.log("User id: %d :: Author id: %d", user.id, message.author.id);
						var xp = Math.round(message.content.length * 0.3);
						var now = new Date;
						var lastMessageTimestamp = new Date(user.lastMessageTimestamp);
						var dateDiff = Math.round(Math.abs(lastMessageTimestamp - now) / (1000 * 60));
						if (dateDiff >= 1) {
							console.log(dateDiff);
						}
					}
				});
			}
			if (!guildExist) {
				users.guilds.push();
			}
		});
	},
};