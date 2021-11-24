module.exports = {
    name: 'test',
    description: 'test',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        message.channel.send({files: ["imádni való plüssök.mp4"]});

        if (message.deletable) message.delete();
    }    
}