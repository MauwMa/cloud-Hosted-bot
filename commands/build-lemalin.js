module.exports = {
    name: 'build-lemalin',
    description: 'build-lemalin',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const lemalin = new Discord.MessageEmbed()
        .setColor('#f2082d')
        .setTitle('Le Malin Build')
        .setURL('')
        .setDescription('dmg | Auto1 | Auto2 | Budget')
        .setImage('https://i.imgur.com/e91pLxE.png')
        .setTimestamp()
        message.channel.send(lemalin);

    }    
}