module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle("【Valentin napi Ajándék】")
        .setURL('')
        .setTimestamp()
        .setDescription('2/14-től 2/24 magyar időszámítás szerint 08:00-ig bejelentkezve Valentin napi ajándékot kapsz a secretary hajódtól, aki a legbaloldalibb oldalon van. Minden üzenet mást fog tartalmazni a hajótól függően.\n\n A Collabos hajók üzeneteit Akashi üzenetként kapjátok meg. A META karakterek különbözőt adnak az eredetihez képest. Az ajándék tartalma ugyan az lesz, minden karakternek. (1 üzenet)')
        .setImage('https://images-ext-2.discordapp.net/external/YaxgGFfyMypdJFCd3CaraWY0hg8qmZ2wpCfr3OYFN0k/https/pbs.twimg.com/media/FLYCqc2VQAAyzEE.png%3Alarge')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

 