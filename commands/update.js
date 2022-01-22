module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle("⚓Chen Hai⚓")
        .setURL('')
        .setTimestamp()
        .setDescription('Szóval te vagy itt az agy az operációk mögött, mi? ...Hehe, végre találkozhattam a legendás Parancsnokkal szemtől szembe. Megtiszteltetés veled együtt dolgozni. Bízom benne, hogy fel fogsz élni a saját magasztos elvárásaidnak.\n\nChen Hai felkészül a bevetésre és hamarosan a dokkodat fogja díszíteni a közel jövőben, Parancsnok.')
        .setImage('https://images-ext-1.discordapp.net/external/2fZ-0Sa5YxRQJtb6bgQbxfvoDL9EboicqqnL8ue3RFs/https/pbs.twimg.com/media/FJnfnMCVIAUJEEH.jpg%3Alarge?width=1291&height=676')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

 