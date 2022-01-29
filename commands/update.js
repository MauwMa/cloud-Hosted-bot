module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle("★A Hatalmas Prérieken Túl ★")
        .setURL('')
        .setTimestamp()
        .setDescription('...Mm, ez elég is lesz a mai naplóbejegyzéshez. Kíváncsi vagyok, hogy mit fog gondolni Cleve miután elolvassa ezt~ Mit gondolsz Parancsnok? Várj... Parancsnok? Jesszus, ne settenkedj mögém, mikor az írásra vagyok fókuszálva...\n\nUSS Columbia új ruhájába öltözik. Cruiser Pass megvétele után szerezhető meg, ha teljesíted a Cruiser Küldetéseket. A Cruiser Küldetése Február 1.-én kezdődik.')
        .setImage('https://images-ext-2.discordapp.net/external/AajVX2GxnuTVgLiSUwOcgGXHC5DH1tZedhxPSwEE7uQ/https/pbs.twimg.com/media/FKQ7rIEVgAosgcQ.jpg%3Alarge?width=1034&height=548')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

 