require("dotenv").config();
const { createConnection } = require('mysql');

const connection = createConnection({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    charset: "utf8mb4_unicode_ci"
});

class DBHandler {
    constructor() { }

    static async returnConnection() {
        return new Promise((resolve, reject) => {
            try {
                resolve({success: true, message: 'Connected Successfully', connection});
            } catch (error) {
                reject({success: false, message: error.message, data: {}});
            }
        });
    }
}