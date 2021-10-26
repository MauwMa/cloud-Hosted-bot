module.exports = {
    name: 'tesst',
    description: 'tesst',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args){

        message.channel.send("<:Kocka:790201634100740117>")

    if (message.deletable) message.delete();

    }    
}


