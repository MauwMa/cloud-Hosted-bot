module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle("❀Kajáljunk❀")
        .setURL('')
        .setTimestamp()
        .setDescription('Végre túl vagyunk a reggeli órákon~ Parancsnok, szeretnél egy remeket ebédelni velem? Heheh, kíváncsi vagy hogy mit csináltam? Hamarosan úgyis meg fogod tudni~\n\nIJN Ooshio az új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')
        .setImage('https://images-ext-2.discordapp.net/external/SaQvAZvD9FtqLCHdnChtmwvaALZdwco8de_90Qr1yDs/https/pbs.twimg.com/media/FN4K0NraQAIWhoB.jpg?width=914&height=491')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

 