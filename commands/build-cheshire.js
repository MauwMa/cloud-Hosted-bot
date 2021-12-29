module.exports = {
    name: 'build-cheshire',
    description: 'build-cheshire',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const cheshire = new Discord.MessageEmbed()
        .setColor('#c5c5ff')
        .setTitle('Cheshire Build')
        .setURL('')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('Balanced (AA) | AP | HE | Budget')
        .setImage('https://i.imgur.com/oIbZD3Q.png')
        .setTimestamp()
        message.channel.send(cheshire);

    }    
}