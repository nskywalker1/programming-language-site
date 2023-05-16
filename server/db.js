const {Sequelize} = require('sequelize')

module.exports = new Sequelize(
    process.env.DB_NAME, //database name
    process.env.DB_USER, //db username
    process.env.DB_PASSWORD, //db password

    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
)

