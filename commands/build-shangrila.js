module.exports = {
    name: 'build-shangrila',
    description: 'build-shangrila',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const shangrila = new Discord.MessageEmbed()
        .setColor('#16108b')
        .setTitle('Shangri-la Build')
        .setURL('')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('Boss | AA | Mob | Budget')
        .setImage('https://i.imgur.com/dHSHqmR.png')
        .setTimestamp()
        message.channel.send(shangrila);

    }    
}