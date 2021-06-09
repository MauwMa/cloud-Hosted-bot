module.exports = {
    name: 'longisland',
    description: 'longisland',
    execute (message, args, Discord){
        const longisland = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Long Island Build')
        .setURL('')
        .setDescription('Ideal')
        .setImage('https://i.imgur.com/pfpdlkO.png')
        message.channel.send(longisland);

    }    
}