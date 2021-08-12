module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('♚Ardent Mester?♚')
        .setURL('')
        .setDescription('HMS Ardent új ruhájába öltözik. A közeljövőben a dokkodban fog  várni, Parancsnok.')
        .setImage('https://images-ext-1.discordapp.net/external/hwcmxC3vkl6clvK27grVfAYVqAKhk4LXIDBNaGb0tDI/https/pbs.twimg.com/media/E8gwuEsVcAgq8Vv.jpg%3Alarge?width=1240&height=676')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}