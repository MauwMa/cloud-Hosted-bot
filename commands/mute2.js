module.exports = {
    name: 'mute2',
    description: 'mute2',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args){

        message.channel.send("Eddigi mute számláló 2/3")

    if (message.deletable) message.delete();

    }    
}


