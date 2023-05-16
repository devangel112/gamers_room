const { Events } = require("discord.js");

const fs = require("node:fs");
const path = require("node:path");

const config = {};
const configLength = [];

const configFolderPath = path.join(__dirname, "../../config");
const configFiles = fs
	.readdirSync(configFolderPath)
	.filter((file) => file.endsWith(".json"));
for (const file of configFiles) {
	const filePath = path.join(configFolderPath, file);
    var filename = file.replace(".json", "");
    var data = require(filePath);
    config[`${filename}`] = data;
}

for (const data in config) {
    configLength.push(data);
}

console.log(`Started loading ${configLength.length} config files.`);

module.exports = {
	name: Events.GuildCreate,
	async execute(guild) {
		var guildExists = false
		var newGuild = {}
		if (guild.systemChannelId != null)
			guild.channels.cache.get(guild.systemChannelId).send(await guild.client.getLocale('es', 'welcome_message'));
		if (typeof config.guilds.data === 'undefined') {
			config.guilds[`${guild.id}`] = {
				ownerId: guild.ownerId,
				premium: false,
				lang: 'es'
			};
			console.log(config.guilds);
			fs.writeFileSync(path.join(__dirname, "../../config/guilds.json"), JSON.stringify(config.guilds), 'utf-8');
		}
	},
};
