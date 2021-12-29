module.exports = {
    name: 'build-neptune',
    description: 'build-neptune',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const neptune = new Discord.MessageEmbed()
        .setColor('#c5c5ff')
        .setTitle('Neptune Build')
        .setURL('')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('AA | DPS | Survival | Budget')
        .setImage('https://i.imgur.com/djyJVR0.png')
        .setTimestamp()
        message.channel.send(neptune);

    }    
}