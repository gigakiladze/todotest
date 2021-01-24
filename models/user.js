const sequelize = require('sequelize')
const db = require('../config/database')

const user = db.define('users',{
    name:{
        type:sequelize.STRING
    },
    username:{
        type:sequelize.STRING
    },
    password:{
        type:sequelize.STRING
    },
    token:{
        type:sequelize.STRING
    }
})

module.exports = user