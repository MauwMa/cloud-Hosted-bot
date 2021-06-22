module.exports = {
    name: 'build-roon',
    description: 'build-roon',
    execute (client, message, args, Discord){
        const roon = new Discord.MessageEmbed()
        .setColor('#f2082d')
        .setTitle('Roon Build')
        .setURL('')
        .setDescription('Reload/ Tank/ FP/ Budget')
        .setImage('https://i.imgur.com/Tshg9y1.png')
        message.channel.send(roon);

    }    
}