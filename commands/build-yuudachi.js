module.exports = {
    name: 'build-yuudachi',
    description: 'build-yuudachi',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const yuudachi = new Discord.MessageEmbed()
        .setColor('#ff90ff')
        .setTitle('Yuudachi Build')
        .setURL('')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('General | VS Light | FP | Budget')
        .setImage('https://i.imgur.com/drM0Z6D.png')
        .setTimestamp()
        message.channel.send(yuudachi);

    }    
}