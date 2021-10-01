module.exports = {
    name: 'build-bremerton',
    description: 'build-bremerton',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const bremerton = new Discord.MessageEmbed()
        .setColor('#16108b')
        .setTitle('Bremerton Build')
        .setURL('')
        .setDescription('CH13 | Tank(front) | DPS | Budget')
        .setImage('https://i.imgur.com/hfhxpQ8.png')
        .setTimestamp()
        message.channel.send(bremerton);

    }    
}