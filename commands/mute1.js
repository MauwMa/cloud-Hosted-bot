module.exports = {
    name: 'mute1',
    description: 'mute1',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args){

        message.channel.send("Eddigi mute számláló 1/3")

    if (message.deletable) message.delete();

    }    
}


