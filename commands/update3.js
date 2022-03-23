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
        .setDescription('Parancsnok,\n\nA Manjuu Campus bútorzat szett a következő karbantartás után lesz elérhető. Szerezd meg ezt a szettet, hogy megtapasztald az izgalmas életet a Manjuu Campuson.')
        .setImage('https://images-ext-1.discordapp.net/external/hElJOuQv1xNLA5lPC3sh56vsza3-zjpb1QFrVVOfOt8/https/pbs.twimg.com/media/FOhzw2hVEAMXnEl.jpg?width=829&height=491')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update3);
        if (update3){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}