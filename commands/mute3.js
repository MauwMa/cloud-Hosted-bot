module.exports = {
    name: 'mute3',
    description: 'mute3',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args){

        message.channel.send("Eddigi mute számláló 3/3")

    if (message.deletable) message.delete();

    }    
}


