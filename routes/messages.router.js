const express = require('express')

const messageRouter = express.Router()
 
const {postMessage,getMessage} = require('../controllers/messages.controllers') 

messageRouter.get('/',getMessage)     // end point for the url of /messages
messageRouter.post('/',postMessage) // end point for the url of post messages

module.exports =messageRouter ;