module.exports = {
    name: 'felszer-bbmain',
    description: 'felszer-bbmain',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        message.channel.send({files: ["bbmain.png"]});


    }    
}