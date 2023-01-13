module.exports = {
    name: 'build-howe',
    description: 'build-howe',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const howe = new Discord.MessageEmbed()
        .setColor('#c5c5ff')
        .setTitle('Höwe Build')
         
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('HE | AP | AP(long battles) | Budget')
        .setImage('https://i.imgur.com/Z95z2nl.png')
        .setTimestamp()
        message.channel.send(howe);

    }    
}