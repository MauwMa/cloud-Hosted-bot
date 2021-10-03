module.exports = {
    name: 'teszt',
    description: 'teszt',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args){

        message.channel.send("https://i.imgur.com/AJh6R10.png")

    if (message.deletable) message.delete();

    }    
}


