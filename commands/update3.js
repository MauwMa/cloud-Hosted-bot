module.exports = {
    name: 'update3',
    description: 'update3',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args){

        message.channel.send("https://fxtwitter.com/AzurLane_EN/status/1425303026248536067");

    if (message.deletable) message.delete();

    }    
}