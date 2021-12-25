module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle("❀Vágás, Szeletelés és Felszolgálás❀")
        .setURL('')
        .setTimestamp()
        .setDescription("Okéska, egy frissen vágott Sashimi azonnal jön! ...Huh? Túl agresszívan közlekedem? Annak ellenére hogy min mentem keresztül miattad, így is panaszkodsz? ...Nos, mindegy. Jó étvágyat!\n\nIJN Hakuryuu új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.")
        .setImage('https://images-ext-1.discordapp.net/external/NlQQ0s1QFZoJCfUJpDsymhiuwb8WYENORln8a8YIcQE/https/pbs.twimg.com/media/FHY-ALiVgAMeUmu.jpg%3Alarge?width=1171&height=676')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

 