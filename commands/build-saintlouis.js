module.exports = {
    name: 'build-saintlouis',
    description: 'build-saintlouis',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const saintlouis = new Discord.MessageEmbed()
        .setColor('#f5f9ff')
        .setTitle('Saint Louis Build')
        .setURL('')
        .setDescription('Tank | DPS | Helena Fight | Budget')
        .setImage('https://i.imgur.com/gAi2i14.png')
        message.channel.send(saintlouis);

    }    
}