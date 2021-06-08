module.exports = {
    name: 'ayanami',
    description: 'ayanami',
    execute (message, args, Discord){
        const ayanami = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Ayanami Build')
        .setURL('')
        .setDescription('Auto/ Manual/ Suicide/ Budget')
        .setImage('https://i.imgur.com/xuyabkN.png')
        message.channel.send(ayanami);

    }    
}