module.exports = {
    name: 'eloora',
    description: 'eloora',
    execute (message, args, Discord){
        const elooran = new Discord.MessageEmbed()
        .setColor('#ffff00')
        .setTitle('Értesítés!')
        .setURL('')
        .setDescription('1 órás  előzetes értesítés a következő karbantartásról.\n Minden szerver előreláthatólag 4 órán keresztül le lesznek állítva. \nKérjük ne felejtsétek el megetetni a hajóitokat nyaa~!')
        .setImage('https://i.imgur.com/0BEHNji.png')
        message.channel.send(elooran);
     if (message.deletable) message.delete();
    }    
}