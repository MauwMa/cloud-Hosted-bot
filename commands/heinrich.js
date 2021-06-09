module.exports = {
    name: 'heinrich',
    description: 'heinrich',
    execute (message, args, Discord){
        const heinrich = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Prinz Heinrich Build')
        .setURL('')
        .setDescription('AP/ Balanced/ Anti-shield/ Budget')
        .setImage('https://i.imgur.com/WTjv45F.png')
        message.channel.send(heinrich);

    }    
}