module.exports = {
    name: 'ayanami',
    description: 'ayanami',
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