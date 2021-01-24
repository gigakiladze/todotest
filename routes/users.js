//Dependencies

const express = require("express")
const router = express.Router()

const userController = require('../controllers/users')

//Users routes

router.post('/user', userController.createUser)
router.get('/user', userController.getUser)
router.put('/user', userController.updateUser)
router.delete('/user',userController.deleteUser)


module.exports = router