module.exports = {
    name: 'shangrila',
    description: 'shangrila',
    execute (message, args, Discord){
        const shangrila = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Shangri-la Build')
        .setURL('')
        .setDescription('Boss/ AA/ Mob/ Budget')
        .setImage('https://i.imgur.com/dHSHqmR.png')
        message.channel.send(shangrila);

    }    
}