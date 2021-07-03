module.exports = {
    name: 'build-hipper',
    description: 'build-hipper',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const hipper = new Discord.MessageEmbed()
        .setColor('#f2082d')
        .setTitle('Admiral Hipper Build')
        .setURL('')
        .setDescription('DPS? | Off Tank 1 | Off Tank 2 | Budget')
        .setImage('https://i.imgur.com/Ycp9wGX.png')
        message.channel.send(hipper);

    }    
}