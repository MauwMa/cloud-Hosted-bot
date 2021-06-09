module.exports = {
    name: 'karveg',
    description: 'karveg',
    execute (message, args, Discord){
        const karveg = new Discord.MessageEmbed()
        .setColor('#ffff00')
        .setTitle('Karbantartás vége!')
        .setURL('')
        .setDescription('Parancsnokok, véget ért a karbantartás.\nNe felejtsetek venni gemeket tőlem nyaaa~!\n @everyone')
        message.channel.send(karveg);
    if (message.deletable) message.delete();
    }    
}