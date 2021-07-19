module.exports = {
    name: 'build-akashi',
    description: 'build-akashi',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const akashi = new Discord.MessageEmbed()
        .setColor('#ff90ff')
        .setTitle('Akashi Build')
        .setURL('')
        .setDescription('Best in slot? | Auto | Manual | Budget')
        .setImage('https://i.imgur.com/xSvnfPR.png')
        message.channel.send(akashi);

    }    
}