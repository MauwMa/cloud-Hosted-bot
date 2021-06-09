module.exports = {
    name: 'friedrich',
    description: 'friedrich',
    execute (message, args, Discord){
        const friedrich = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('friedrich der Große Build')
        .setURL('')
        .setDescription('HE dps/ AP dps/ Survival/ Budget')
        .setImage('https://i.imgur.com/VGwVA3l.png')
        message.channel.send(friedrich);

    }    
}