module.exports = {
    name: 'build-jeanne',
    description: 'build-jeanne',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const jeanne = new Discord.MessageEmbed()
        .setColor('#16108b')
        .setTitle('Jeanne dArc Build')
        .setURL('')
        .setDescription('Offtank 1 | Helena Fight | Offtank 2 | Budget')
        .setImage('https://i.imgur.com/9VXUYx3.png')
        .setTimestamp()
        message.channel.send(jeanne);

    }    
}