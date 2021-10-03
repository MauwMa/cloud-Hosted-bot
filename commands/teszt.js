module.exports = {
    name: 'teszt',
    description: 'teszt',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args){

        message.channel.send("https://i.imgur.com/QxNKPzU.jpg")

    if (message.deletable) message.delete();

    }    
}


