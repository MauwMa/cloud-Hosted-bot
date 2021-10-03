module.exports = {
    name: 'build-northcarolina',
    description: 'build-northcarolina',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const northcarolina = new Discord.MessageEmbed()
        .setColor('#16108b')
        .setTitle('North Carolina Build')
        .setURL('')
        .setDescription('Tank | Ch 13 | General | Budget')
        .setImage('https://i.imgur.com/8Y3tdHK.png')
        .setTimestamp()
        message.channel.send(northcarolina);

    }    
}