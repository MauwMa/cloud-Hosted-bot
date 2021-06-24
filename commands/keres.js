module.exports = {
    name: 'keres',
    permissions: ["KICK_MEMBERS"],
    description: 'keres',
    execute (client, message, args){

        message.channel.send("Van valakinek valamilyen build kérése Cicához nyaaa~?");

    if (message.deletable) message.delete();

    }    
}