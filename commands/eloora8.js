module.exports = {
    name: 'eloora',
    description: 'eloora',
    execute (message, args, Discord){
        const eloora8 = new Discord.MessageEmbed()
        .setColor('#ffff00')
        .setTitle('Értesítés!')
        .setURL('')
        .setDescription('1 órás  előzetes értesítés a következő karbantartásról.\n Minden szerver előreláthatólag 8 órán keresztül le lesznek állítva. \nKérjük ne felejtsétek el megetetni a hajóitokat nyaa~!')
        .setImage('https://i.imgur.com/0BEHNji.png')
        message.channel.send(eloora8);
     if (message.deletable) message.delete();
    }    
}