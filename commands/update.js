module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle("✠Elbe✠")
        .setURL('')
        .setTimestamp()
        .setDescription("Jade-osztályú hordozó vagyok, Elbe. És te vagy ennek a flottának a Parancsnoka? Hmm, elég biztos lehetsz magadba ha hozzád jön az, aki a győzelmet elhozza neked♪\n\nKMS Elbe felkészül a bevetésre és hamarosan a dokkodat fogja díszíteni a közel jövőben, Parancsnok.")
        .setImage('https://images-ext-1.discordapp.net/external/u8e5gnWmUveZlWComGfyXwhpNT305sX3bVeSpKJFI-M/https/pbs.twimg.com/media/FHS6qjYVcAASIT4.jpg%3Alarge?width=1291&height=676')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

 