const fs = require("node:fs");
const path = require("node:path");

const locales = {};
const localesLength = [];

const localesFolderPath = path.join(__dirname, "../../locale");
const localesFiles = fs
	.readdirSync(localesFolderPath)
	.filter((file) => file.endsWith(".json"));
for (const file of localesFiles) {
	const filePath = path.join(localesFolderPath, file);
    var filename = file.replace(".json", "");
    var data = require(filePath);
    locales[`${filename}`] = data;
}

for (const locale in locales) {
    localesLength.push(locale);
}

console.log(`Started loading ${localesLength.length} locale files.`)

module.exports = (client) => {
	client.getLocale = async (language, string, ...vars) => {
        let locale = locales[language][string];
    
        let count = 0;
        locale = locale.replace(/%s/g, () =>
            vars[count] !== null ? vars[count] : "%s"
        );
    
        return await locale;
    }
};
