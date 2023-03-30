const fs = require("node:fs");
const path = require("node:path");

module.exports = (client) => {
  const events = [];

  const eventsPath = path.join(__dirname, "../../events");
  const eventFiles = fs
    .readdirSync(eventsPath)
    .filter((file) => file.endsWith(".js"));

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

  (async () => {
    try {
      console.log(`Started loading ${events.length} events.`);
    } catch (error) {
      // And of course, make sure you catch and log any errors!
      console.error(error);
    }
  })();
};
