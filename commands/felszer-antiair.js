module.exports = {
    name: 'felszer-antiair',
    description: 'felszer-antiair',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        message.channel.send({files: ["antiair.png"]});


    }    
}