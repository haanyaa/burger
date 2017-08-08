// Set up MySQL connection.
var mysql = require("mysql");


// For Heroku Deployment vs Local Mysql Databse
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: null,
        database: "buger_db"
    });
}

// Make connection.

// Export connection for our ORM to use.
module.exports = connection;