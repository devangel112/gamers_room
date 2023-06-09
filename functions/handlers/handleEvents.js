const fs = require("node:fs");
const path = require("node:path");
const { connection } = require('mongoose');

module.exports = (client) => {
  const events = [];

  const eventsFolderPath = path.join(__dirname, "../../events");
  const eventsFolders = fs.readdirSync(eventsFolderPath);

  for (const folder of eventsFolders) {
    const eventsPath = path.join(eventsFolderPath, folder);
    const eventFiles = fs
      .readdirSync(eventsPath)
      .filter((file) => file.endsWith(".js"));

    switch (folder) {
      case "client":
        for (const file of eventFiles) {
          const filePath = path.join(eventsPath, file);
          const event = require(filePath);
          if (event.once) {
            client.once(event.name, (...args) => event.execute(...args));
            events.push(event);
          } else {
            client.on(event.name, (...args) => event.execute(...args));
            events.push(event);
          }
        }
        break;
      case "mongo":
        for (const file of eventFiles) {
          const filePath = path.join(eventsPath, file);
          const event = require(filePath);
          if (event.once) {
            connection.once(event.name, (...args) => event.execute(...args));
            events.push(event);
          } else {
            connection.on(event.name, (...args) => event.execute(...args));
            events.push(event);
          }
        }
        break;

      default:
        break;
    }
  }

  (async () => {
    try {
      console.log(`Started loading ${events.length} events.`);
    } catch (error) {
      // And of course, make sure you catch and log any errors!
      console.error(error);
    }
  })();
};
