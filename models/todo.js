const sequelize = require('sequelize')
const db = require('../config/database')

const todo = db.define('todolists',{
    todoname:{
        type:sequelize.STRING
    },
    tododes:{
        type:sequelize.TEXT
    },
    token:{
        type:sequelize.STRING
    },
})

module.exports = todo  