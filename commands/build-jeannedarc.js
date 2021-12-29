module.exports = {
    name: 'build-jeannedarc',
    description: 'build-jeannedarc',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const jeannedarc = new Discord.MessageEmbed()
        .setColor('#16108b')
        .setTitle('Jeanne dArc Build')
        .setURL('')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('Offtank 1 | Helena Fight | Offtank 2 | Budget')
        .setImage('https://i.imgur.com/9VXUYx3.png')
        .setTimestamp()
        message.channel.send(jeannedarc);

    }    
}