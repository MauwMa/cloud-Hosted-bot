module.exports = {
    name: 'ping',
    permissions: ["BAN_MEMBERS"],
    description: 'ping',
    permiss
    execute (client, message, args){

        message.channel.send("Pong!");

    }    
}