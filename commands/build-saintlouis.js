module.exports = {
    name: 'build-saintlouis',
    description: 'build-saintlouis',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const saintlouis = new Discord.MessageEmbed()
        .setColor('#f5f9ff')
        .setTitle('Saint Louis Build')
         
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('Tank | DPS | Helena Fight | Budget')
        .setImage('https://i.imgur.com/gAi2i14.png')
        .setTimestamp()
        message.channel.send(saintlouis);

    }    
}