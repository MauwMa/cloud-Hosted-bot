module.exports = {
    name: 'ham',
    description: 'ham',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){

        message.channel.send("<:akashigem:792393120171819010>")

    if (message.deletable) message.delete();

    }    
}


