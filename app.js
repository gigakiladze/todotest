//Dependecies

const express = require('express')
const bodyParser = require("body-parser")
require('dotenv').config()

const users = require('./routes/users')
const db = require('./config/database')
const todolist = require('./routes/todolist')
// Cors Policy
var cors = require('cors')


//Test DB Connection

db.authenticate()
.then(() => console.log("Db Connected"))
.catch(err => console.log(err))

// MiddleWares
const app = express();
app.use(cors())
app.use(bodyParser.json());

app.use(users)
app.use(todolist)

// The server is listening on port 5000
app.listen(process.env.Port);