module.exports = {
    name: 'build-yukikaze',
    description: 'build-yukikaze',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const yukikaze = new Discord.MessageEmbed()
        .setColor('#ff90ff')
        .setTitle('Yukikaze Build')
        .setURL('')
        .setDescription('Best in slot? | Auto | Manual | Budget')
        .setImage('https://i.imgur.com/xSvnfPR.png')
        message.channel.send(yukikaze);

    }    
}