module.exports = {
    name: 'build-maya',
    description: 'build-maya',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const maya = new Discord.MessageEmbed()
        .setColor('#ff90ff')
        .setTitle('Maya Build')
        .setURL('')
        .setDescription('Late game | Auto | Manual | Budget')
        .setImage('https://i.imgur.com/uV1Xng3.png')
        .setTimestamp()
        message.channel.send(maya);

    }    
}