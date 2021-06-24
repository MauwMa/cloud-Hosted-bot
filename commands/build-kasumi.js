module.exports = {
    name: 'build-kasumi',
    description: 'build-kasumi',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const kasumi = new Discord.MessageEmbed()
        .setColor('#ff90ff')
        .setTitle('Kasumi Build')
        .setURL('')
        .setDescription('Balanced/ Manual/ Auto/ Budget"')
        .setImage('https://i.imgur.com/MRrmoOT.png')
        message.channel.send(kasumi);

    }    
}