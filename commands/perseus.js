module.exports = {
    name: 'perseus',
    description: 'perseus',
    execute (message, args, Discord){
        const perseus = new Discord.MessageEmbed()
        .setColor('#c5c5ff')
        .setTitle('Perseus Build')
        .setURL('')
        .setDescription('Burst"/ Fast reload/ AA/ Budget')
        .setImage('https://i.imgur.com/t3rvQuK.png')
        message.channel.send(perseus);

    }    
}