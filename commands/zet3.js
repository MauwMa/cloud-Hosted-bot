module.exports = {
    name: 'zet3',
    description: 'zet3',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        message.channel.send({files: ["prinz.mp4"]});

        if (message.deletable) message.delete();
    }    
}