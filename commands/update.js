module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('♚Angyali Napsütés♚')
        .setURL('')
        .setDescription('Az időjárás szép napos, bármit is fogok csinálni ma az biztosan sikeres lesz. Mindenki másnak legyen ilyen szép napja... Awuhau! Kicsi manjuu, jól vagy? Nem hiszem el, hogy megbotlottam...\n\nHMS Fortune új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')
        .setImage('https://images-ext-2.discordapp.net/external/HenEsLlTf4mobV-Z7zsIjej4QK1Y1o6PCvLu27D6Yjo/https/pbs.twimg.com/media/E_uFGEvVIAEhT2-.jpg%3Alarge?width=1112&height=405')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}