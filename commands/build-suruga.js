module.exports = {
    name: 'build-suruga',
    description: 'build-suruga',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const suruga = new Discord.MessageEmbed()
        .setColor('#ff90ff')
        .setTitle('Suruga Build')
        .setURL('')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('AP | HE | Speed | Budget')
        .setImage('https://i.imgur.com/WPxHXKJ.png')
        .setTimestamp()
        message.channel.send(suruga);

    }    
}