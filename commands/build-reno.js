module.exports = {
    name: 'build-reno',
    description: 'build-reno',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const reno = new Discord.MessageEmbed()
        .setColor('#16108b')
        .setTitle('Reno Build')
        .setURL('')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('Normal | CH13 | Surface dps | Budget')
        .setImage('https://i.imgur.com/y9xmTGW.png')
        .setTimestamp()
        message.channel.send(reno);

    }    
}