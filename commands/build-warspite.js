module.exports = {
    name: 'build-warspite',
    description: 'build-warspite',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const warspite = new Discord.MessageEmbed()
        .setColor('#c5c5ff')
        .setTitle('Warspite Build')
        .setURL('')
        .setDescription('CH13 | HE | AP | Budget')
        .setImage('https://i.imgur.com/DiC5J14.png')
        .setTimestamp()
        message.channel.send(warspite);

    }    
}