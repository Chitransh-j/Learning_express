const path = require('path')

function getMessage(req,res){
    res.sendFile(path.join(__dirname,'..','public','Chitransh.jpg'))
}

function postMessage(req,res){
    res.status(200).send('Updating Messages!')
}


module.exports = {
    postMessage,
    getMessage
}

