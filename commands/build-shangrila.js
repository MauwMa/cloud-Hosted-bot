module.exports = {
    name: 'build-shangrila',
    description: 'build-shangrila',
    execute (client, message, args, Discord){
        const shangrila = new Discord.MessageEmbed()
        .setColor('#16108b')
        .setTitle('Shangri-la Build')
        .setURL('')
        .setDescription('Boss/ AA/ Mob/ Budget')
        .setImage('https://i.imgur.com/dHSHqmR.png')
        message.channel.send(shangrila);

    }    
}