module.exports = {
    name: 'ping',
    description: 'ping',
    execute (client, message, args){

        message.channel.send("Pong!");

    }    
}