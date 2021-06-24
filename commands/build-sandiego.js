module.exports = {
    name: 'build-sandiego',
    description: 'build-sandiego',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const sandiego = new Discord.MessageEmbed()
        .setColor('#16108b')
        .setTitle('San Diego Build')
        .setURL('')
        .setDescription('Best in slot/ Balanced/ No fly zone/ Budget')
        .setImage('https://i.imgur.com/pl7Y3FF.png')
        message.channel.send(sandiego);

    }    
}