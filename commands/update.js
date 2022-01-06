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
        .setDescription('Parancsnokok,\n\n A Shougatsu Lucky Bag 2021 Január 13. magyar időszámítás szerint 07:59-ig lesz még elérhető.')
        .setImage('https://images-ext-1.discordapp.net/external/KDVzf1JqmBKOzPPPGOBO4moSoHj36-iRjpbAeUpB8EQ/https/pbs.twimg.com/media/FIVN1IuUUAAZ7LP.jpg%3Alarge')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

 