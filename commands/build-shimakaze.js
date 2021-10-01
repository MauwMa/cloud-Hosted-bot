module.exports = {
    name: 'build-shimakaze',
    description: 'build-shimakaze',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const shimakaze = new Discord.MessageEmbed()
        .setColor('#ff90ff')
        .setTitle('Shimakaze Build')
        .setURL('')
        .setDescription('NUKE(Manual) | Auto | Manual | Budget')
        .setImage('https://i.imgur.com/vVh7F9X.png')
        .setTimestamp()
        message.channel.send(shimakaze);

    }    
}