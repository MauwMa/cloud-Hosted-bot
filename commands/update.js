module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle("⚓Hwah Jah⚓")
        

        .setTimestamp()
        .setDescription('Parancsnok, megtisztelő hogy találkozhatunk. Hwah Jah vagyok a Dragon Emperyből. Most hogy csak kétszemközt vagyunk, egyenesen a lényegre térek - Köhöm... Van itt, öhm... valami, tudod, szuper érdekes vagy mókás itt a környéken?\n\nHwah Jah felkészül a bevetésre és hamarosan a dokkodat fogja díszíteni a közel jövőben, Parancsnok.')
        .setImage('https://images-ext-2.discordapp.net/external/sMuqUWK3uSov6LYvRwk09nWtUe8C106vOrd9rlEwT_E/https/pbs.twimg.com/media/FmREgkjagAMV3ke.jpg')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

   