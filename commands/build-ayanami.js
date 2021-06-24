module.exports = {
    name: 'build-ayanami',
    description: 'build-ayanami',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const ayanami = new Discord.MessageEmbed()
        .setColor('#ff90ff')
        .setTitle('Ayanami Build')
        .setURL('')
        .setDescription('Auto/ Manual/ Suicide/ Budget')
        .setImage('https://i.imgur.com/xuyabkN.png')
        message.channel.send(ayanami);

    }    
}