module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle("✠Vas-Fekete Elízium✠")
        .setURL('')
        .setTimestamp()
        .setDescription("Üdvözöllek, mit szeretnél rendelni? ...Ha szeretnéd, hanyagolhatjuk a színjátékot. Amúgy sem vagyok hozzászokva a pincérkedéshez, szóval jobban preferálom így. Hehe.\n\nKMS Bismarck új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.")
        .setImage('https://images-ext-2.discordapp.net/external/DSpLTCPESJMvIz7H6U5PUjXqENkzz1xk1PQ7ZMbqdgw/https/pbs.twimg.com/media/FHchJCFacAAjkJ7.jpg%3Alarge?width=950&height=548')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

 