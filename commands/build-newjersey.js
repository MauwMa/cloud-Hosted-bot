module.exports = {
    name: 'newjersey',
    description: 'newjersey',
    execute (client, message, args, Discord){
        const newjersey = new Discord.MessageEmbed()
        .setColor('#16108b')
        .setTitle('New Jersey Build')
        .setURL('')
        .setDescription('AP/ HE/ SPEED/ Budget')
        .setImage('https://i.imgur.com/XnmzxOR.png')
        message.channel.send(newjersey);

    }    
}