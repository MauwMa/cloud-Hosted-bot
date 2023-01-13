module.exports = {
    name: 'build-nurnberg',
    description: 'build-nurnberg',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const nurnberg = new Discord.MessageEmbed()
        .setColor('#f2082d')
        .setTitle('Nürnberg Build')
         
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('DPS | General | CH13 | Budget')
        .setImage('https://i.imgur.com/9iCrkjX.png')
        .setTimestamp()
        message.channel.send(nurnberg);

    }    
}