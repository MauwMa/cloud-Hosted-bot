module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('⚜Szivárvány Randevú⚜')
        .setURL('')
        .setTimestamp()
        .setDescription('Hé, Parancsnok, megvárattalak? Tudod hogy megy, néha nagyon nehéz egy lánynak a jó ruhát kiválasztania. Akárhogyis, induljunk meg~♪\n\nMNF Foch az új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')
        .setImage('https://images-ext-2.discordapp.net/external/8BRnAYlp2Hgr30vIXU67IYklOXU61IXeGuEbTsz8iUQ/https/pbs.twimg.com/media/FDbMc4WVQAIWRm4.jpg%3Alarge?width=1122&height=555')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

