module.exports = {
    name: 'build-kasumi',
    description: 'build-kasumi',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const kasumi = new Discord.MessageEmbed()
        .setColor('#ff90ff')
        .setTitle('Kasumi Build')
         
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('Balanced | Manual | Auto | Budget"')
        .setImage('https://i.imgur.com/MRrmoOT.png')
        .setTimestamp()
        message.channel.send(kasumi);

    }    
}