module.exports = {
    name: 'build-kinu',
    description: 'build-kinu',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const kinu = new Discord.MessageEmbed()
        .setColor('#ff90ff')
        .setTitle('Kinu Build')
        .setURL('')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('Auto | Anti Sub? | Manual | Budget')
        .setImage('https://i.imgur.com/cEAmR1P.png')
        .setTimestamp()
        message.channel.send(kinu);

    }    
}