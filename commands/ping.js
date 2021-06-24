module.exports = {
    name: 'ping',
    permissions: ["KICK_MEMBERS"],
    description: 'ping',
    execute (client, message, args){

        message.channel.send("Pong!");

    }    
}