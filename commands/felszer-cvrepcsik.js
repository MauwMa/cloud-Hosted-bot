module.exports = {
    name: 'felszer-cvrepcsik',
    description: 'felszer-cvrepcsik',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        message.channel.send({files: ["cvrepcsik.png"]});


    }    
}