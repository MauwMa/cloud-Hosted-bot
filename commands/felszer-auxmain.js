module.exports = {
    name: 'felszer-auxmain',
    description: 'felszer-auxmain',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        message.channel.send({files: ["auxmain.png"]});


    }    
}