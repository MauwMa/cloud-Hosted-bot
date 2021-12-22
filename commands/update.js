module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle("❀Eseménytelen ünnepi üdvözlet❀")
        .setURL('')
        .setTimestamp()
        .setDescription("IJN Suruga az új L2D ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.")
        .setImage('https://i.imgur.com/cCrzi2B.jpg')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

 