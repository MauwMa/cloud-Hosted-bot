module.exports = {
    name: 'karerr2',
    permissions: ["KICK_MEMBERS"],
    description: 'karerr2',
    execute (client, message, args, Discord){
        const karerr2 = new Discord.MessageEmbed()
        .setColor('#ffff00')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle('Karbantartás!!')
        
        .setDescription('A főhadiszállás egy váratlan problémába ütközött a karbantartás miatt és emiatt 2 órával meghosszabbítjuk a karbantartást. Bármilyen változás fog történni azt meg fogjuk osztani.\n\nKöszönjük a megértéseteket!')
        .setImage('https://images-ext-2.discordapp.net/external/5v50XmQ9nF9KyOXWmb0nOWfrE2ORMd0UFkonjtTr7Ec/https/pbs.twimg.com/media/FNQCnhJakAgtc2h.jpg')
        .setTimestamp()
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(karerr2);
        if (karerr2){
            return message.channel.send(`Elküldtem a karbantartás értesítést nyaaa~`);
          } 
    }    
}