module.exports = {
    name: 'build-souryuu',
    description: 'build-souryuu',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const souryuu = new Discord.MessageEmbed()
        .setColor('#ff90ff')
        .setTitle('Souryuu Build')
        .setURL('')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('General? | Boss | Mob | Budget')
        .setImage('https://i.imgur.com/nFnsSKX.png')
        .setTimestamp()
        message.channel.send(souryuu);

    }    
}