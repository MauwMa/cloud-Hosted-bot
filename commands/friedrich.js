module.exports = {
    name: 'friedrich',
    description: 'friedrich',
    execute (message, args, Discord){
        const friedrich = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Friedrich der Große Build')
        .setURL('')
        .setDescription('HE dps/ AP dps/ Survival/ Budget')
        .setImage('https://imgur.com/VGwVA3l')
        message.channel.send(friedrich);

    }    
}