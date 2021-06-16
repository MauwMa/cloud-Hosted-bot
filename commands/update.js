module.exports = {
    name: 'update',
    description: 'update',
    execute (message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('❀Vacation Offensive!❀')
        .setURL('')
        .setDescription('IJN Yamashiro új ruhájába öltözik. A közeljövőben a dokkodban fog  várni, Parancsnok.')
        .setImage('https://images-ext-1.discordapp.net/external/Kz1djNKWXEdjqxq19R-2rsiOYJUF6kGSKmewkPiUPzU/https/pbs.twimg.com/media/E36wUz0VIAQUhE2.jpg%3Alarge?width=1365&height=675')
        message.channel.send(update);
    if (message.deletable) message.delete();
    }    
}