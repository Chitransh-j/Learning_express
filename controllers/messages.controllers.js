function postMessage(req,res){
    res.status(200).send('Updating Messages!')
}

function getMessage(req,res){
    res.send('<ul><li>Hello !</li></ul>')
}

module.exports = {
    postMessage,
    getMessage
}

