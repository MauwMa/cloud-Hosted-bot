module.exports = {
    name: 'build-akagi',
    description: 'build-akagi',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const akagi = new Discord.MessageEmbed()
        .setColor('#ff90ff')
        .setTitle('Akagi Build')
        .setURL('')
        .setDescription('Planes | More Planes | Even more Planes | Budget')
        .setImage('https://i.imgur.com/tuKpsWo.png')
        .setTimestamp()
        message.channel.send(akagi);

    }    
}