module.exports = {
    name: 'bismarck',
    description: 'bismarck',
    execute (message, args, Discord){
        const bismarck = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Bismarck Build')
        .setURL('')
        .setDescription('AP/ FAST/ HE/ Budget')
        .setImage('https://i.imgur.com/vCEoEay.png')
        message.channel.send(bismarck);

    }    
}