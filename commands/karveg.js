module.exports = {
    name: 'karveg',
    description: 'karveg',
    execute (message, args){

        message.channel.send("Parancsnokok, véget ért a karbantartás.\nNe felejtsetek venni gemeket tőlem nyaaa~!\n @everyone");

    if (message.deletable) message.delete();

    }    
}