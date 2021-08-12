module.exports = {
    name: 'update3',
    description: 'update3',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args){

        message.channel.send("Bismarcknak mind1");

    if (message.deletable) message.delete();

    }    
}