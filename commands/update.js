module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle("【Today's Debut✩Tomorrow's Star! Rerun】")
        .setURL('')
        .setTimestamp()
        .setDescription(`Li'l Sandy vissza fog térni a "Today's Debut✩Tomorrow's Star!" event Rerunjával. Szerezz elegendő "Friendship Point"-ot, hogy ténylegesen csatlakozzon Li'l Sandy hozzád!`)
        .setImage('https://images-ext-1.discordapp.net/external/ARt9Fr33Xv0eUxRPhyOAWJUB7sLvZGbIeRtEKJ4ImSM/https/pbs.twimg.com/media/FGpVcecVkAI2L8x.png%3Alarge')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

 