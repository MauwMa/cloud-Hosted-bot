module.exports = {
    name: 'build-london',
    description: 'build-london',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const london = new Discord.MessageEmbed()
        .setColor('#c5c5ff')
        .setTitle('London Build')
        .setURL('')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('HE | AP | Helena fight | Budget')
        .setImage('https://i.imgur.com/xrfb7jr.png')
        .setTimestamp()
        message.channel.send(london);

    }    
}