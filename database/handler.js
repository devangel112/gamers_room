require("dotenv").config();
const { createConnection } = require('mysql2');

var connection;

exports.connect = function () {
    return new Promise((resolve, reject) => {
        try {
            connection = createConnection({
                host: process.env.DB_HOST,
                user: process.env.DB_USER,
                password: "123456",
                database: process.env.DB_NAME,
                charset: "utf8mb4_unicode_ci"
            });
            console.log("[Database] Connected Successfully");
            resolve()
        } catch (error) {
            reject(error);
        }
    });
}

exports.getConnection = function () {
    return connection;
};