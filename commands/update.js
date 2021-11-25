module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Boldog Hálaadást')
        .setURL('')
        .setTimestamp()
        .setDescription('Parancsnokok, Boldog Hálaadást! Reméljük jól telik az ünneplés~')
        .setImage('https://images-ext-1.discordapp.net/external/3EvYYuZHQ04vCl1KIhMn94dVRLuGZmEID37zQBbKO4Q/https/pbs.twimg.com/media/FFDpuiVVUAcBE-t.jpg%3Alarge?width=1202&height=676')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

 