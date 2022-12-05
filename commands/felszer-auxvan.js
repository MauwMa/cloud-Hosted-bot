module.exports = {
    name: 'felszer-auxvan',
    description: 'felszer-auxvan',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        message.channel.send({files: ["auxvan.png"]});


    }    
}