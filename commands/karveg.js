module.exports = {
    name: 'karveg',
    permissions: ["KICK_MEMBERS"],
    description: 'karveg',
    execute (client, message, args){
        const karveg = client.channels.cache.find(channel => channel.id === "789936292413571102");
        karveg.send("Parancsnokok, véget ért a karbantartás.\nNe felejtsetek venni gemeket tőlem nyaaa~!\n @everyone");

        if (karveg){
            return message.channel.send(`Elküldtem az kérést nyaaa~`);
          }
    if (message.deletable) message.delete();

    }    
}