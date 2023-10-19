const path = require('path')

function getMessage(req,res){
    res.render('messages',{
        title:'my friends',
        friend:'Elon Musk',
    })
}

function postMessage(req,res){
    res.status(200).send('Updating Messages!')
}


module.exports = {
    postMessage,
    getMessage
}

