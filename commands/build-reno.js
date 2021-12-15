module.exports = {
    name: 'build-reno',
    description: 'build-reno',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const reno = new Discord.MessageEmbed()
        .setColor('#16108b')
        .setTitle('Reno Build')
        .setURL('')
        .setDescription('Normal | CH13 | Surface dps | Budget')
        .setImage('https://i.imgur.com/qAAGpmZ.png')
        .setTimestamp()
        message.channel.send(reno);

    }    
}