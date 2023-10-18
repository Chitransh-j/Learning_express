const express = require('express') //importing the express module
const {postMessage,getMessage} = require('./controllers/messages.controllers') 
const {getOneFriend,getAllfriends,postFriend} = require('./controllers/friends.controllers')
const app = express()              // creating an instance

const PORT = 3000


//first middleware of logging time in and out
app.use((req,res,next)=>{
    const start = Date.now()
    console.log(`${req.method} ${req.url} `)
    next()
    console.log(` ${Date.now()-start} ms `)
})

app.use(express.json()) //middleware for converting the response body to json


// end point for /friends post urls 
app.post('/friends',postFriend)

// The entire list of friends when the root friends is called upon
app.get('/friends',getAllfriends)

//End point for the URL that are parametrised 
app.get('/friends/:friendID',getOneFriend)

app.get('/messages',getMessage)

app.post('/messages',postMessage)


//for listening to the server on port number 3000
app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}....`)
})




