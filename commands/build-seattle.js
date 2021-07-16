module.exports = {
    name: 'build-seattle',
    description: 'build-seattle',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const seattle = new Discord.MessageEmbed()
        .setColor('#16108b')
        .setTitle('Seattle Build')
        .setURL('')
        .setDescription('DPS | AA | Balanced | Budget')
        .setImage('https://i.imgur.com/qAAGpmZ.png')
        message.channel.send(seattle);

    }    
}