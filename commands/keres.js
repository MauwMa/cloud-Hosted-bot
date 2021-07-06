module.exports = {
    name: 'keres',
    permissions: ["KICK_MEMBERS"],
    description: 'keres',
    execute (client, message, args){

        client.channels.cache.find(channel => channel.id === "789936506193182740").send("Van valakinek valamilyen build kérése Cicához nyaaa~?");

    //if (message.deletable) message.delete();

    }    
}