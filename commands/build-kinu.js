module.exports = {
    name: 'build-kinu',
    description: 'build-kinu',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const kinu = new Discord.MessageEmbed()
        .setColor('#ff90ff')
        .setTitle('Kinu Build')
        .setURL('')
        .setDescription('Auto | Anti Sub? | Manual | Budget')
        .setImage('https://i.imgur.com/uV1Xng3.png')
        .setTimestamp()
        message.channel.send(kinu);

    }    
}