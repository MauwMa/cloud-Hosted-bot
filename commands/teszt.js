module.exports = {
    name: 'teszt',
    permissions: ["KICK_MEMBERS"],
    description: 'teszt',
    execute (client, message, args){
        const teszt = client.channels.cache.find(channel => channel.id === "789936292413571102");
        teszt.send("8 óra*");
        if (teszt){
            return message.channel.send(`Nyaaa~`);
          }

    }    
}