module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle("❀Dinasztia Shipgirl❀")
        .setURL('')
        .setTimestamp()
        .setDescription('Felszerelkeztem az teljes Dragon Empery felszereléssel, igen. Lehet nem néz ki olyan menőn mint a játékban, de Ayanamit kielégíti. Heh.\n\nIJN Ayanami új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')
        .setImage('https://images-ext-2.discordapp.net/external/eoknrX53De8BDeHXtju3tQO8EFmyLOsfFI_1cdAmb5o/https/pbs.twimg.com/media/FJ8GQ4SaAAEhUIn.jpg%3Alarge?width=1274&height=676')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

 