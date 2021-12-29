module.exports = {
    name: 'build-shoukaku',
    description: 'build-shoukaku',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const shoukaku = new Discord.MessageEmbed()
        .setColor('#ff90ff')
        .setTitle('Shoukaku Build')
        .setURL('')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('Gyors | DMG | None | Budget')
        .setImage('https://i.imgur.com/niGYMpT.png')
        .setTimestamp()
        message.channel.send(shoukaku);

    }    
}