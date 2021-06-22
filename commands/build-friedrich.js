module.exports = {
    name: 'friedrich',
    description: 'friedrich',
    execute (client, message, args, Discord){
        const friedrich = new Discord.MessageEmbed()
        .setColor('#f2082d')
        .setTitle('friedrich der Große Build')
        .setURL('')
        .setDescription('HE dps/ AP dps/ Survival/ Budget')
        .setImage('https://i.imgur.com/VGwVA3l.png')
        message.channel.send(friedrich);

    }    
}