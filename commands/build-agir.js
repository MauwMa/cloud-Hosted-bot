module.exports = {
    name: 'build-agir',
    description: 'build-agir',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const agir = new Discord.MessageEmbed()
        .setColor('#f2082d')
        .setTitle('Agir Build')
        .setURL('')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('Slow Timing | General | Vs Light | Budget')
        .setImage('https://i.imgur.com/pZgkFSR.png')
        .setTimestamp()

        message.channel.send(agir);

    }    
}