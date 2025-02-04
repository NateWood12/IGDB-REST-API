const mysql = require("mysql2/promise");

const pool = mysql.createPool({
    host: "localhost",
    user: "yourusername",
    password: "yourpassword",
    database: "yourdatabase",
    port: 3306,
});

module.exports(pool);
