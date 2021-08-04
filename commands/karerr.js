module.exports = {
    name: 'karerr',
    permissions: ["KICK_MEMBERS"],
    description: 'karerr',
    execute (client, message, args, Discord){
        const karerr = new Discord.MessageEmbed()
        .setColor('#ffff00')
        .setTitle('Karbantartás!!')
        .setURL('')
        .setDescription('A főhadiszállás egy váratlan problémába ütközött a karbantartás miatt és emiatt 2 órával meghosszabbítjuk a karbantartást. Bármilyen változás fog történni azt meg fogjuk osztani.\n\nKöszönjük a megértéseteket!')
        .setImage('https://i.imgur.com/0BEHNji.png')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(karerr);
        if (karerr){
            return message.channel.send(`Elküldtem a karbantartás értesítést nyaaa~`);
          }
    }    
}