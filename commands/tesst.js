module.exports = {
    name: 'test',
    description: 'test',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        message.channel.send({files: ["twitter.mp4"]});

        if (message.deletable) message.delete();
    }    
}