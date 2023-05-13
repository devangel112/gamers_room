module.exports = {
    name: "err",
    execute(err) {
        console.log(`[Database status]: An error ocurred with the database connection:\n${err}`);
    }
};