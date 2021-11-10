module.exports = {
    name: 'felszer-ddmaingun',
    description: 'felszer-ddmaingun',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        message.channel.send({files: ["ddgun.png"]});


    }    
}