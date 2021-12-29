module.exports = {
    name: 'build-ayanami',
    description: 'build-ayanami',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const ayanami = new Discord.MessageEmbed()
        .setColor('#ff90ff')
        .setTitle('Ayanami Build')
        .setURL('')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('Auto | Manual | Suicide | Budget')
        .setImage('https://i.imgur.com/xuyabkN.png')
        .setTimestamp()
        message.channel.send(ayanami);

    }    
}