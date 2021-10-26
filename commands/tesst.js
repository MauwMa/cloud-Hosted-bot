module.exports = {
    name: 'tesst',
    description: 'tesst',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args){

        message.channel.send(":Kocka:")

    if (message.deletable) message.delete();

    }    
}


