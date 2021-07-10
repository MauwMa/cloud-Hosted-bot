module.exports = {
    name: 'ham2',
    description: 'ham2',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){

        message.channel.send("<a:AkashiGemDance:856999350097543178>")

    if (message.deletable) message.delete();

    }    
}


