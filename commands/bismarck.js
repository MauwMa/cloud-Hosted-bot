module.exports = {
    name: 'bismarck',
    description: 'bismarck',
    execute (client, message, args, Discord){
        const bismarck = new Discord.MessageEmbed()
        .setColor('#f2082d')
        .setTitle('Bismarck Build')
        .setURL('')
        .setDescription('AP/ FAST/ HE/ Budget')
        .setImage('https://i.imgur.com/vCEoEay.png')
        message.channel.send(bismarck);

    }    
}