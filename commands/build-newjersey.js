module.exports = {
    name: 'build-newjersey',
    description: 'build-newjersey',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const newjersey = new Discord.MessageEmbed()
        .setColor('#16108b')
        .setTitle('New Jersey Build')
        .setURL('')
        .setDescription('AP | HE | SPEED | Budget')
        .setImage('https://i.imgur.com/XnmzxOR.png')
        .setTimestamp()
        message.channel.send(newjersey);

    }    
}