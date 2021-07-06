module.exports = {
    name: 'build-nakiriayame',
    description: 'build-nakiriayame',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const nakiriayame = new Discord.MessageEmbed()
        .setColor('#ff90ff')
        .setTitle('Nakiri Ayame Build')
        .setURL('')
        .setDescription('DPS | Balanced | Tank | Budget')
        .setImage('https://i.imgur.com/tqOWfQr.png')
        message.channel.send(nakiriayame);

    }    
}