module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle("☭Sevastopol☭")
        

        .setTimestamp()
        .setDescription('\n\nSN Sevastopol felkészül a bevetésre és hamarosan a dokkodat fogja díszíteni a közel jövőben, Parancsnok.')
        .setImage('https://images-ext-2.discordapp.net/external/ZeLrJCFmD3nqX8W3vNuYTxIek3qhlMGKjX4gEOCnxuI/https/pbs.twimg.com/media/FrqALwSakAEHlDs.jpg?width=1131&height=592')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

   