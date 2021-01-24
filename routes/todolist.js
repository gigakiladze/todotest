//Dependencies

const express = require("express")
const router = express.Router()

const todDoController = require('../controllers/todolist')

//Users routes

router.post('/todo', todDoController.createToDo)
router.get('/todo', todDoController.getToDo)
router.put('/todo', todDoController.updateToDo)
router.delete('/todo',todDoController.deleteTodo)


module.exports = router