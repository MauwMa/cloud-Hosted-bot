module.exports = {
    name: 'karerr1',
    permissions: ["KICK_MEMBERS"],
    description: 'karerr1',
    execute (client, message, args, Discord){
        const karerr1 = new Discord.MessageEmbed()
        .setColor('#ffff00')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle('Karbantartás!!')
        .setURL('')
        .setDescription('A főhadiszállás egy váratlan problémába ütközött a karbantartás miatt és emiatt 1 órával meghosszabbítjuk a karbantartást. Bármilyen változás fog történni azt meg fogjuk osztani.\n\nKöszönjük a megértéseteket!')
        .setImage('https://images-ext-2.discordapp.net/external/PGLOP1lyRoOuSu0_VOVLG4pDYnNQRtj_iBvYnSzdF30/https/pbs.twimg.com/media/FE21HPTVUAEzk36.jpg%3Alarge?width=965&height=551')
        .setTimestamp()
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(karerr1);
        if (karerr1){
            return message.channel.send(`Elküldtem a karbantartás értesítést nyaaa~`);
          }
    }    
}