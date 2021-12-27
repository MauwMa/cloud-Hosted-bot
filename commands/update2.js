module.exports = {
    name: 'update2',
    description: 'update2',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('✠Kirakati Edzés✠')
        .setURL('')
        .setTimestamp()
        .setDescription(`Parancsnok, ah, öhm... Rengeteg új dolog van a menünkön és limitált ideig elérhetőek csak... K-Kérlek adj nekik egy esélyt! Fuuu... H-Hála Istennek, sikerült dadogás nélkül elmondani...\n\nKMS Leipzig új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.`)        
        .setImage('https://images-ext-1.discordapp.net/external/Lc5SUefOQ3zWQMmEmnUO8f9dmn0LyDnl1Ny_4X8_3rQ/https/pbs.twimg.com/media/FHn3dfpUcAImpCO.jpg%3Alarge?width=1171&height=676')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update2);
        if (update2){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}