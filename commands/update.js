module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('')
        .setURL('')
        .setTimestamp()
        .setDescription('Promise Crate elérhető október 14. magyar időszámítás szerint 9:00-ig.')
        .setImage('https://images-ext-1.discordapp.net/external/YQxwutIG3anozfW1sMVTxituHEWsIM2eBc94azWGZ0I/https/pbs.twimg.com/media/FAnBiAlVcAQEXFY.png%3Alarge')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}