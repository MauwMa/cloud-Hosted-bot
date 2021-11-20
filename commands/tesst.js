module.exports = {
    name: 'tesst',
    description: 'tesst',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args){

        message.channel.send("Stream végével a szoba is le lett zárva. Az event kezdésekor (11/25) a szoba törlésre kerül nyaaa~")

    if (message.deletable) message.delete();

    }    
}


