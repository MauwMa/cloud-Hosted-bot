module.exports = {
    name: 'build-kashino',
    description: 'build-kashino',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const kashino = new Discord.MessageEmbed()
        .setColor('#ff90ff')
        .setTitle('Kashino Build')
        .setURL('')
        .setDescription('Vanguard | Avi | Main+CB | Budget(avi)')
        .setImage('https://i.imgur.com/tXimpOv.png')
        .setTimestamp()
        message.channel.send(kashino);

    }    
}