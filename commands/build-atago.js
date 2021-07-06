module.exports = {
    name: 'build-atago',
    description: 'build-atago',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const atago = new Discord.MessageEmbed()
        .setColor('#ff90ff')
        .setTitle('Atago Build')
        .setURL('')
        .setDescription('Ideal? | Auto | Manual | Budget')
        .setImage('https://i.imgur.com/YMF2PQk.png')
        message.channel.send(atago);

    }    
}