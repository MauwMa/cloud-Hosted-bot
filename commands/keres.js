module.exports = {
    name: 'keres',
    permissions: ["KICK_MEMBERS"],
    description: 'keres',
    execute (client, message, args){
         const keres = client.channels.cache.find(channel => channel.id === "789936506193182740");
        keres.send("Van valakinek valamilyen build kérése Cicához nyaaa~?");
        if (message.deletable) message.delete();
        if (keres){
            return message.channel.send(`Megkérdeztem a többi parancsnokoktól nyaaa~`);
          }


    }    
}