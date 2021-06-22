module.exports = {
    name: 'heinrich',
    description: 'heinrich',
    execute (client, message, args, Discord){
        const heinrich = new Discord.MessageEmbed()
        .setColor('#f2082d')
        .setTitle('Prinz Heinrich Build')
        .setURL('')
        .setDescription('AP/ Balanced/ Anti-shield/ Budget')
        .setImage('https://i.imgur.com/WTjv45F.png')
        message.channel.send(heinrich);

    }    
}