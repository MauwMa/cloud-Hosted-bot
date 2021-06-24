module.exports = {
    name: 'karveg',
    permissions: ["KICK_MEMBERS"],
    description: 'karveg',
    execute (client, message, args){

        message.channel.send("Parancsnokok, véget ért a karbantartás.\nNe felejtsetek venni gemeket tőlem nyaaa~!\n @everyone");

    if (message.deletable) message.delete();

    }    
}