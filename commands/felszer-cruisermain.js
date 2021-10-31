module.exports = {
    name: 'felszer-cruisermain',
    description: 'felszer-cruisermain',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        message.channel.send({files: ["cruisermain.png"]});


    }    
}