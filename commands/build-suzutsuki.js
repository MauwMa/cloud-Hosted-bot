module.exports = {
    name: 'build-suzutsuki',
    description: 'build-suzutsuki',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const suzutsuki = new Discord.MessageEmbed()
        .setColor('#ff90ff')
        .setTitle('Suzutsuki Build')
        .setURL('')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('dps | AA | Anti sub | Budget')
        .setImage('https://i.imgur.com/s6BjADP.png')
        .setTimestamp()
        message.channel.send(suzutsuki);

    }    
}