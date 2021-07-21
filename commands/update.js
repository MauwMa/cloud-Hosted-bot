module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('❀Nyári Fesztiváli Vásárlás❀')
        .setURL('')
        .setDescription('Yuugure új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')
        .setImage('https://images-ext-2.discordapp.net/external/rf33GRcE-wId0aofChATLZ7gXkCHqHliTDvR0Z8wc4A/https/pbs.twimg.com/media/E60XH96VEAAusIl.jpg%3Alarge?width=1146&height=567')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}