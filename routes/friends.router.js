const express = require('express')

const {getOneFriend,getAllfriends,postFriend} = require('../controllers/friends.controllers')

const friendsRouter = express.Router()

friendsRouter.use((req,res,next)=>{
    console.log(`Your IP Adrress is :${req.ip}`)
    next()
})


friendsRouter.post('/',postFriend)  // end point for /friends post urls 
friendsRouter.get('/',getAllfriends)  // The entire list of friends when the root friends is called upon
friendsRouter.get('/:friendID',getOneFriend)   //End point for the URL that are parametrised 

module.exports = friendsRouter ;