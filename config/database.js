const { Sequelize } = require('sequelize');
module.exports = new Sequelize( process.env.Database_Name, process.env.Database_UserName, process.env.Database_Password , {
    host: process.env.Database_Host,
    dialect: 'postgres',
    operatorsAliases: false,

    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle: 10000
    }
})
