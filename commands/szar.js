module.exports = {
    name: 'szar',
    description: 'szar',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const szar = new Discord.MessageEmbed()
        .setColor('#ffff00')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle('Értesítés!')
        .setURL('')
        .setDescription('1 órás előzetes értesítés a következő karbantartásról.\n Minden szerver előreláthatólag 8 órán keresztül le lesznek állítva. \nKérjük ne felejtsétek el megetetni a hajóitokat nyaa~!')
        .setImage('https://images-ext-2.discordapp.net/external/PGLOP1lyRoOuSu0_VOVLG4pDYnNQRtj_iBvYnSzdF30/https/pbs.twimg.com/media/FE21HPTVUAEzk36.jpg%3Alarge?width=965&height=551')
        .setTimestamp()
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(szar);
        if (szar){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

 