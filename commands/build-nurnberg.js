module.exports = {
    name: 'build-nurnberg',
    description: 'build-nurnberg',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const nurnberg = new Discord.MessageEmbed()
        .setColor('#f2082d')
        .setTitle('Nürnberg Build')
        .setURL('')
        .setDescription('DPS | General | CH13 | Budget')
        .setImage('https://i.imgur.com/9iCrkjX.png')
        message.channel.send(nurnberg);

    }    
}