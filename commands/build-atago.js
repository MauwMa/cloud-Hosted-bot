module.exports = {
    name: 'build-atago',
    description: 'build-atago',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const atago = new Discord.MessageEmbed()
        .setColor('#ff90ff')
        .setTitle('Atago Build')
        .setURL('')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('Ideal? | Auto | Manual | Budget')
        .setImage('https://i.imgur.com/YMF2PQk.png')
        .setTimestamp()
        message.channel.send(atago);

    }    
}