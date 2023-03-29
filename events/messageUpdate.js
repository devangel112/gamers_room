const { Events } = require('discord.js');

module.exports = {
	name: Events.MessageUpdate,
	execute(oldMessage, newMessage) {
        console.log(`${oldMessage.author.username} edited a message. Old message: ${oldMessage.content} New message: ${newMessage.content}`);
	},
};