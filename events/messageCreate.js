const { Events } = require('discord.js');

module.exports = {
	name: Events.MessageCreate,
	async execute(message) {
		if (message.author.bot) return false; 
        let xp = Math.round(message.content.length * 0.3);
		console.log(message.content.length * 0.3);
        console.log(`Message from ${message.author.username}: ${message.content}`);
        console.log(xp);
	},
};