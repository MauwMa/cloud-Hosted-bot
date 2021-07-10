module.exports = {
    name: 'build-tosa',
    description: 'build-tosa',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const tosa = new Discord.MessageEmbed()
        .setColor('#ff90ff')
        .setTitle('Tosa Build')
        .setURL('')
        .setDescription('CH13 | AP | HE | Budget')
        .setImage('https://i.imgur.com/L5E6Xju.png')
        message.channel.send(tosa);

    }    
}