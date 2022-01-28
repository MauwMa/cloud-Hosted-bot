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
        .setImage('https://images-ext-2.discordapp.net/external/eoknrX53De8BDeHXtju3tQO8EFmyLOsfFI_1cdAmb5o/https/pbs.twimg.com/media/FJ8GQ4SaAAEhUIn.jpg%3Alarge?width=1274&height=676')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

 