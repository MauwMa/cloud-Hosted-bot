module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('【Scherzo of Iron and Blood】')
        .setURL('')
        .setTimestamp()
        .setDescription('Scherzo of Iron and Blood event véglegesen bekelrül a War Archives-ba a következő karbantartáskor.')
        .setImage('https://images-ext-2.discordapp.net/external/JWdn3--G17JOPftDnUiB_343Ie137w2S7LDGvNoUBrI/https/pbs.twimg.com/media/FGib978VIAAk5J4.jpg%3Alarge?width=1110&height=550')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

 