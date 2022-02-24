module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle("☭Az Élet Gépezete☭")
        .setURL('')
        .setTimestamp()
        .setDescription('Igen, ezek az adatok és eredmények elég érdekesek... Bár nekem semmit nem jelentenek! Én gépész zseni vagyok, nem elemző. Ahh-ha-ha-haah!\n\nSN Soobrazitelny felkészül a bevetésre és hamarosan a dokkodat fogja díszíteni a közel jövőben, Parancsnok.')
        .setImage('https://images-ext-2.discordapp.net/external/L1eBbYUtbZ9S53Olm4spAWhCifx4opPLjsrFzewzgWs/https/pbs.twimg.com/media/FMR7fl6VQAISguT.jpg?width=881&height=468')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

 