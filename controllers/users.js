//Dependecies

const user = require('../models/user')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')

// Call back functions

const createUser = (req,res, next) => {
    const data = {
        name: req.body.name,
        username:req.body.username,
        password:req.body.password,
        token: jwt.sign(req.body.name, crypto.randomBytes(64).toString('hex'))
    }
    user.findAll({
        where: {
            username: data.username
          }
    })
   .then((foundUser) => {
       if(foundUser.length){
           res.send(409)
       }else{
        user.create({
            ...data
           })
           .then(() => res.send(201,data.token))
           .catch((err) => console.log(err))
       }
   })
   .catch((err) => console.log(err))

}



const getUser = (req,res, next) => {
 const username = req.body.username
 const password = req.body.password

  user.findOne({
      where: {
          username: username,
          password: password
      } 
  })
  .then((foundUser) => {
      if(foundUser){
        res.send(200,{name:foundUser.name,token:foundUser.token})
      }else{
          res.sendStatus(401)
      }
  })
  .catch((err) => console.log(err))
}



const deleteUser = (req,res, next) => {
  const token = req.body.token
  user.findOne({
    where: {
        token:token
    } 
})
.then((foundUser) => {
    if(foundUser){
       user.destroy({
        where: {
            token:token
        } 
       }) 
      res.send(202,"User Deleted")
    }else{
        res.sendStatus(401)
    }
})
.catch((err) => console.log(err))
}


const updateUser = (req,res, next) => {
    const token = req.body.token
    const password = req.body.password
    const newpassword = req.body.newpassword
    user.findOne({
      where: {
          token:token,
          password:password
      } 
  })
  .then((foundUser) => {
      if(foundUser){
         user.update({
           password:newpassword
         },{
          where: {
              token:token,
          } 
         }) 
        res.send(200,"User Updated")
      }else{
          res.sendStatus(401)
      }
  })
  .catch((err) => console.log(err))
  
}


exports.createUser = createUser
exports.getUser = getUser
exports.deleteUser = deleteUser
exports.updateUser = updateUser