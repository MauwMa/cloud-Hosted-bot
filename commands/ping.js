module.exports = {
    name: 'ping',
    description: 'ping',
    execute (message, args){

        message.channel.send("pong!");

    if (message.deletable) message.delete();

    }    
}