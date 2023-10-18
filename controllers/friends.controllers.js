const model = require('../models/friends.models')


function postFriend (req,res){
    if (!req.body.name){
        return res.status(400).json({Error: ' Missing Friend Data'})
    }

    const newFriend ={
        name: req.body.name,
        id :model.length
    }
    
    model.push(newFriend)

    res.json(newFriend)
}

function getOneFriend (req,res) {
    const friendID = req.params.friendID
    const friend = model[friendID]

    if (friend){
        res.status(200).json(friend)
    }
    else{
        res.status(404).send('404 Not found')
    }
}


function getAllfriends(req,res){
    res.json(model)
}



module.exports ={
    getAllfriends,
    getOneFriend,
    postFriend
}