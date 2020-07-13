const dotenv = require('dotenv')
dotenv.config()

const mysql = require('mysql')
const db = mysql.createConnection({
    host    : process.env.MYSQL_HOST,
    user    : process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,
})

module.exports = {
    db,
    mysql
}