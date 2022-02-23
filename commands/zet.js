module.exports = {
    name: 'zet',
    description: 'zet',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        message.channel.send({files: ["zet.mp4"]});


    }    
}