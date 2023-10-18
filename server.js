const express = require('express') //importing the express module


const friendsRouter = require('./routes/friends.router')
const messageRouter = require('./routes/messages.router')
const app = express() // creating an instance of server

const PORT = 3000


//first middleware of logging time in and out
app.use((req,res,next)=>{
    const start = Date.now()
    console.log(`${req.method} ${req.url} `)

    next()
    console.log(`${Date.now()-start}ms`)
})

app.use(express.json()) //middleware for converting the response body to json

app.use('/friends',friendsRouter)
app.use('/messages',messageRouter)

//for listening to the server on port number 3000
app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}....`)
})




