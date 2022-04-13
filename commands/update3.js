module.exports = {
    name: 'update3',
    description: 'update3',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle('')
        .setURL('')
        .setTimestamp()
        .setDescription('Parancsnokok, \n\n Ping Hai, Ning Hai, Bush és a többiek elérhetőek lesznek a Guild Shopban. Véglegesen kiválthatóak lesznek. Már meghívtad őket a kikötődbe?')
        .setImage('https://images-ext-2.discordapp.net/external/1RIZiK-maGPxs8EP3v5rm8JDe9OlJJYOLxnbJVrrTKQ/https/pbs.twimg.com/media/FQIpV1_UYAEclU5.jpg?width=983&height=504')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update3);
        if (update3){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}