module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('❀PJ Poker Party❀')
        .setURL('')
        .setTimestamp()
        .setDescription('Hogy telik a napod, Parancsnok? Hehe, az okos nővéremet keresed, Le Malint? Ha igen, akkor jobban tennéd, ha olyan helyen keresnéd amely kevésbé... népszerű~♪\n\nFFNF Le Terrible az új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')
        .setImage('https://images-ext-2.discordapp.net/external/JHjss9isTRzw-EdxJtidEofluVHqGN_am8kykYSqd4A/https/pbs.twimg.com/media/FCheaSgVEAIkSMg.jpg%3Alarge')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}