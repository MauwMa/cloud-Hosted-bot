module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle("☭Ahogy mondod, Asszonyom☭")
        .setURL('')
        .setTimestamp()
        .setDescription('Itt a Nyomozóiroda... Óh fiú, egy újabb eset. Parancsnok, végezz a papírmunkákkal amilyen gyorsan csak tudsz. Van egy szemtanunk interjúzni.\n\nSN Tallinn új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')
        .setImage('https://images-ext-1.discordapp.net/external/OAoMNWUHU9YvIGP6NjhXcXoPpHBX_sg6lx7xgqw2oVo/https/pbs.twimg.com/media/FMBTiVtVUAI3uDi.jpg?width=881&height=468')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

 