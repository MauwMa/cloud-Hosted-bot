module.exports = {
    name: 'teszt',
    description: 'teszt',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const teszt = client.channels.cache.find(channel => channel.id === "853629612986990612");
        teszt.send("blabla");

    }    
}