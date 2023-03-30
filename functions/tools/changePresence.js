const { ActivityType } = require("discord.js");

module.exports = (client) => {
    client.changePresence = async (type, text, status) => {
        await client.user.setPresence({
            activities: [
                {
                    type: type,
                    name: text
                },
            ],
            status: status
        });
    }
}