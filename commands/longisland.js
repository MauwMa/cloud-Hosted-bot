module.exports = {
    name: 'longisland',
    description: 'longisland',
    execute (message, args, Discord){
        const longisland = new Discord.MessageEmbed()
        .setColor('#16108b')
        .setTitle('Long Island Build')
        .setURL('')
        .setDescription('Ideal')
        .setImage('https://i.imgur.com/pfpdlkO.png')
        message.channel.send(longisland);

    }    
}