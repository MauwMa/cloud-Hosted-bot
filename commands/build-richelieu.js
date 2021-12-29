module.exports = {
    name: 'build-richelieu',
    description: 'build-richelieu',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const richelieu = new Discord.MessageEmbed()
        .setColor('#f5f9ff')
        .setTitle('Richelieu Build')
        .setURL('')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('Slot | HE | Survival | Budget')
        .setImage('https://i.imgur.com/LYy5afX.png')
        .setTimestamp()
        message.channel.send(richelieu);

    }    
}