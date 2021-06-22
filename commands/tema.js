module.exports = {
    name: 'tema',
    description: 'tema',
    execute (client, message, args){

        message.channel.send("Parancsnokok, nagyon eltérünk a szoba témájától nyaaa~");

    if (message.deletable) message.delete();

    }    
}