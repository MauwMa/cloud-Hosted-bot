module.exports = {
    name: 'karveg',
    permissions: ["KICK_MEMBERS"],
    description: 'karveg',
    execute (client, message, args){

        client.channels.cache.find(channel => channel.id === "789936292413571102").send("Parancsnokok, véget ért a karbantartás.\nNe felejtsetek venni gemeket tőlem nyaaa~!\n @everyone");

    //if (message.deletable) message.delete();

    }    
}