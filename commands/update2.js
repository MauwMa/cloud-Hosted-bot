module.exports = {
    name: 'update2',
    description: 'update2',
    execute (client, message, args, Discord){
        const update2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('★Part-Time Bomber★')
        .setURL('')
        .setDescription('USS Downes új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')
        .setImage('https://images-ext-1.discordapp.net/external/Fd8zlDiw0JXKkQQc2yImOvFOc9Ke1XcPHVwc1MTBWzE/https/pbs.twimg.com/media/E4Zw4IJUUAEGF2B.jpg%3Alarge?width=1271&height=629')
        message.channel.send(update2);
    if (message.deletable) message.delete();
    }    
}