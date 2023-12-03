require("dotenv").config();
const DBHandler = require('./database/handler.js');
const fs = require("node:fs");
const path = require("node:path");
const { Client, Collection, GatewayIntentBits } = require("discord.js");
const client = new Client({
	intents: [
		GatewayIntentBits.DirectMessages,
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildModeration,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
	],
});

client.commands = new Collection();

const functions = [];

const functionsFolderPath = path.join(__dirname, "functions");
const functionsFolders = fs.readdirSync(functionsFolderPath);
for (const folder of functionsFolders) {
	const functionsPath = path.join(functionsFolderPath, folder);
	const functionFiles = fs
		.readdirSync(functionsPath)
		.filter((file) => file.endsWith(".js"));
	for (const file of functionFiles) {
		const filePath = path.join(functionsFolderPath, folder, file);
		functions.push(file);
		require(filePath)(client);
	}
}

(async () => {
	try {
		console.log(`Started loading ${functions.length} functions.`);
		/* console.log(`Started loading ${locales.length} locales.`); */
	} catch (error) {
		// And of course, make sure you catch and log any errors!
		console.error(error);
	}
})();

client.login(process.env.DISCORD_BOT_TOKEN);
DBHandler.connect();

let connection = DBHandler.getConnection();
connection.query("SELECT * FROM guilds", (err, result) => {
	if (err) {
		return console.log("[Database] Error:", err.message);
	}

	console.log(result);
});
/* (async () => {
	await db.connect();
})(); */
