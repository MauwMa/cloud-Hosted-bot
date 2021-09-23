module.exports = {
    name: 'teszt',
    description: 'teszt',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args){

        message.channel.send("https://www.youtube.com/watch?v=ybCNEBo_-fc")

    if (message.deletable) message.delete();

    }    
}


