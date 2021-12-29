module.exports = {
    name: 'build-bismarck',
    description: 'build-bismarck',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const bismarck = new Discord.MessageEmbed()
        .setColor('#f2082d')
        .setTitle('Bismarck Build')
        .setURL('')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('AP | FAST | HE | Budget')
        .setImage('https://i.imgur.com/vCEoEay.png')
        .setTimestamp()
        message.channel.send(bismarck);

    }    
}