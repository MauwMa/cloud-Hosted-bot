module.exports = {
    name: 'update2',
    description: 'update2',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('❀Ütős Leszámolás - Nyári Formáció❀')
        .setURL('')
        .setDescription('Ritsuko Akizuki új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')
        .setImage('https://images-ext-2.discordapp.net/external/YbSo3PVjl_qBKQIqjZWrtJHlKhhnzqan6L_LRCs5hZg/https/pbs.twimg.com/media/E61CvLWUUAQtjEV.jpg%3Alarge?width=1090&height=567')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update2);
        if (update2){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}