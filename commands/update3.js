module.exports = {
    name: 'update3',
    description: 'update3',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle('')
        .setURL('')
        .setTimestamp()
        .setDescription('Parancsnok,\n\nEzek a lányok az új iskolai ruhájukba öltöztek az új szemesztert köszöntve. A kinézetek Április 7. Magyar időszámítás szerint 8:59-ig lesznek elérhetőek.')
        .setImage('https://images-ext-1.discordapp.net/external/ZSL637ays5EzmO72jRHQoKDaDAWoEz9KEQ-cXCH-GJc/https/pbs.twimg.com/media/FO6N6QFVgAI74P3.jpg?width=1022&height=503')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update3);
        if (update3){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}