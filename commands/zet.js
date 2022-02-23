module.exports = {
    name: 'zet',
    description: 'zet',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const zet = new Discord.MessageEmbed()
        .setColor('#ff90ff')
        .setTitle('Yuudachi Build')
        .setURL('')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription({files: ["zet.mp4"]})
        .setImage('')
        .setTimestamp()
        message.channel.send(zet);

    }    
}