module.exports = {
    name: 'felszer-torpedo',
    description: 'felszer-torpedo',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        message.channel.send({files: ["torpedo.png"]});


    }    
}