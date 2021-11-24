module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Merch')
        .setURL('')
        .setTimestamp()
        .setDescription('Parancsnokok\n\n Ezek az imádni való desszert-témájú plüssek Le Malin és Perseusról November 25.-én magyar időszámítás szerint 05:00-kor lesznek elérhetőek\n\nBolt link: https://t.co/fdl58JDrlB\n\nEmail: store.cs@yo-star.com')
        .setImage('')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

 