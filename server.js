const express = require('express') //importing the express module

const app = express()              // creating an instance

const PORT = 3000

const friends = [{
    id:0,
    name: 'Albert Einstein'
},{
    id:1,
    name:'Sir Issac Newton'
}]

// The entire list of friends when the root friends is called upon
app.get('/friends',(req,res)=>{
    res.json(friends)
})

app.get('/friends/:friendID',(req,res)=>{
    const friendID = req.params.friendID
    const friend = friends[friendID]

    if (friend){
        res.status(200).json(friend)
    }
    else{
        res.status(404).json({error:'Error 404 :PAGE NOT FOUND'})
    }
})


app.get('/messages',(req,res)=>{
    res.send('<ul><li>Hello !</li></ul>')
})

app.post('/messages',(req,res)=>{
    console.log('Updating Messages!')
})

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}....`)
})




