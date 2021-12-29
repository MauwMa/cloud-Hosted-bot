module.exports = {
    name: 'build-kashino',
    description: 'build-kashino',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const kashino = new Discord.MessageEmbed()
        .setColor('#ff90ff')
        .setTitle('Kashino Build')
        .setURL('')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('Vanguard | Avi | Main+CB | Budget(avi)')
        .setImage('https://i.imgur.com/tXimpOv.png')
        .setTimestamp()
        message.channel.send(kashino);

    }    
}