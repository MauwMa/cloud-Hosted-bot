module.exports = {
    name: 'build-rikkatakarada',
    description: 'build-rikkatakarada',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const rikkatakarada = new Discord.MessageEmbed()
        .setColor('#c5c5ff')
        .setTitle('Rikka Takarada Build')
        .setURL('')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('DMG? | CH14 | AA | General')
        .setImage('https://i.imgur.com/CvG9dcd.png')
        .setTimestamp()
        message.channel.send(rikkatakarada);

    }    
}