module.exports = {
    name: 'update2',
    description: 'update2',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('❀Yura❀ ')
        .setURL('')
        .setDescription('Öhm... Esetleg tudod, hogy merre lehet a Parancsnok? Yura a nevem, és ma érkeztem meg. Te vagy a parancsnok? Öhm, van aláírott papírod vagy bizonyítványod, hogy megerősítsd?\n\nIJN Yura felkészül a bevetésre és hamarosan a dokkodat fogja díszíteni a közel jövőben, Parancsnok.')
        .setImage('https://i.imgur.com/Zv1WcqA.jpg')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update2);
        if (update2){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}