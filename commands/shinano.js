module.exports = {
    name: 'shinano',
    description: 'shinano',
    execute (message, args, Discord){
        const shinano = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Shinano Build')
        .setURL('')
        .setDescription('Boss/ Mob/ AA/ Budget')
        .setImage('https://i.imgur.com/Tv8c4Vi.png')
        message.channel.send(shinano);

    }    
}