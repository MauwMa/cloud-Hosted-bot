module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle("🔥Junyou META🔥")
        .setURL('')
        .setTimestamp()
        .setDescription('Junyou... vagyij. Kérlek adj utasításokat... Parancsnok.\n\nJunyou META hamarosan leszáll. Ingyenesen megszerezhető lesz Cruise Mission elvégzéséért.')
        .setImage('https://images-ext-1.discordapp.net/external/3V540MAEpxn6FBvKXXUjH-3N9a2l6id7y9lCdVxMtzc/https/pbs.twimg.com/media/FKMoPGQVkAEAIxD.jpg%3Alarge?width=1073&height=548')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

 