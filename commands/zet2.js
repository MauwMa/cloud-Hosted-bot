module.exports = {
    name: 'zet2',
    description: 'zet2',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        message.channel.send({files: ["goth.mp4"]});

        if (message.deletable) message.delete();
    }    
}