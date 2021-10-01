module.exports = {
    name: 'build-longisland',
    description: 'build-longisland',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const longisland = new Discord.MessageEmbed()
        .setColor('#16108b')
        .setTitle('Long Island Build')
        .setURL('')
        .setDescription('Ideal')
        .setImage('https://i.imgur.com/pfpdlkO.png')
        .setTimestamp()
        message.channel.send(longisland);

    }    
}