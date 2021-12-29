module.exports = {
    name: 'build-noshiro',
    description: 'build-noshiro',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const noshiro = new Discord.MessageEmbed()
        .setColor('#ff90ff')
        .setTitle('Noshiro Build')
        .setURL('')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('Balanced | Tank | Torp | Budget')
        .setImage('https://i.imgur.com/xzIwTb4.png')
        .setTimestamp()
        message.channel.send(noshiro);

    }    
}