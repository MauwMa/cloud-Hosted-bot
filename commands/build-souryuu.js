module.exports = {
    name: 'build-souryuu',
    description: 'build-souryuu',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const souryuu = new Discord.MessageEmbed()
        .setColor('#ff90ff')
        .setTitle('Souryuu Build')
        .setURL('')
        .setDescription('General? | Boss | Mob | Budget')
        .setImage('https://i.imgur.com/nFnsSKX.png')
        .setTimestamp()
        message.channel.send(souryuu);

    }    
}