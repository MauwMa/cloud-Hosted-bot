module.exports = {
    name: 'ham',
    description: 'ham',
    execute (client, message, args){

        message.channel.send(':akashigem:')

    if (message.deletable) message.delete();

    }    
}


