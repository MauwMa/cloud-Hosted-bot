module.exports = {
    name: 'nagato',
    description: 'opsiren',
    execute (message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Nagato build')
        .setURL('')
        .setDescription('')
        .addFields('')
        .setImage ('https://pbs.twimg.com/media/D3TwNO6V4AAqRvc.jpg')
        .setFooter('by Cica');


        message.channel.send(newEmbed);

    }    
}