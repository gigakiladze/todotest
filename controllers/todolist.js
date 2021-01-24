const user = require('../models/user')
const todo = require('../models/todo')
const { update } = require('../models/user')




const createToDo = (req,res, next) => {
    const token = req.body.token
    const data = {todoname:req.body.todoname,tododes:req.body.tododes,token:req.body.token}
    console.log(data)
    user.findOne({
      where: {
          token:token
      } 
  })
  .then((foundUser) => {
      if(foundUser){
        todo.create({...data}) 
        .then(() => res.send(201)) 
        .catch((err) => console.log(err))
      }else{
          res.sendStatus(401)
      }
  })
  .catch((err) => console.log(err))
  }

  const getToDo = (req,res, next) => {
    const token = req.body.token
    const data = {todoname:req.body.todoname,tododes:req.body.tododes,token:req.body.token}
    console.log(data)
    user.findOne({
      where: {
          token:token
      } 
  })
  .then((foundUser) => {
      if(foundUser){
        todo.findAll({
            where: {
                token:token,
            }
        }) 
        .then((alltodo) => res.send(200,{alltodo})) 
        .catch((err) => console.log(err))
      }else{
          res.sendStatus(401)
      }
  })
  .catch((err) => console.log(err))
  }

  const deleteTodo = (req,res, next) => {
    const token = req.body.token
    const id = req.body.id
    user.findOne({
      where: {
          token:token
      } 
  })
  .then((foundUser) => {
      if(foundUser){
        todo.destroy({
            where: {
                token:token,
                id:id,
            }
        }) 
        .then(() => res.send(202,"todo deleted")) 
        .catch((err) => console.log(err))
      }else{
          res.sendStatus(401)
      }
  })
  .catch((err) => console.log(err))
  }




  const updateToDo = (req,res, next) => {
    const token = req.body.token
    const id = req.body.id
    updateData = {todoname:req.body.todoname,tododes:req.body.tododes}
    user.findOne({
      where: {
          token:token,
      } 
  })
  .then((foundUser) => {
      if(foundUser){
         todo.update({
           ...updateData
         },{
          where: {
              id:id,
              token:token,
          } 
         }) 
        res.send(200,"ToDo Updated")
      }else{
          res.sendStatus(401)
      }
  })
  .catch((err) => console.log(err))
  
}


exports.createToDo = createToDo
exports.getToDo = getToDo
exports.deleteTodo = deleteTodo
exports.updateToDo = updateToDo

