module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle("")
        .setURL('')
        .setTimestamp()
        .setDescription('Parancsnokok\n\nA Dragon Empery Estate bútorzat szett Február 10. magyar időszámítás szerint 08:00-ig lesz elérhető. Szerezzétek meg ezt a bútorzat szettet, hogy belekóstoljatok Dragon Empery mindennapi életébe~')
        .setImage('https://images-ext-1.discordapp.net/external/3fmx7aqliOaa4-Vz9RFN1TVpekOf3MWM8JAtgpkHuS0/https/pbs.twimg.com/media/FK1xqbkXsAERkhQ.jpg%3Alarge?width=1141&height=676')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

 