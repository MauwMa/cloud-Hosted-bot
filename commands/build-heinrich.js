module.exports = {
    name: 'build-heinrich',
    description: 'build-heinrich',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const heinrich = new Discord.MessageEmbed()
        .setColor('#f2082d')
        .setTitle('Prinz Heinrich Build')
        .setURL('')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('AP | Balanced | Anti-shield | Budget')
        .setImage('https://i.imgur.com/WTjv45F.png')
        .setTimestamp()
        message.channel.send(heinrich);

    }    
}