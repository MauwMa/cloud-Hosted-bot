module.exports = {
    name: 'build-shinano',
    description: 'build-shinano',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const shinano = new Discord.MessageEmbed()
        .setColor('#ff90ff')
        .setTitle('Shinano Build')
         
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('Boss | Mob | AA | Budget')
        .setImage('https://i.imgur.com/Tv8c4Vi.png')
        .setTimestamp()
        message.channel.send(shinano);

    }    
}