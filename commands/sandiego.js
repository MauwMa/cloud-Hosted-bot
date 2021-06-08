module.exports = {
    name: 'sandiego',
    description: 'sandiego',
    execute (message, args, Discord){
        const sandiego = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('San Diego Build')
        .setURL('')
        .setDescription('Best in slot/ Balanced/ No fly zone/ Budget')
        .setImage('https://i.imgur.com/pl7Y3FF.png')
        message.channel.send(sandiego);

    }    
}