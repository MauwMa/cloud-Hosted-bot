module.exports = {
    name: 'tirpitz',
    description: 'tirpitz',
    execute (message, args, Discord){
        const tirpitz = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Tirpitz Build')
        .setURL('')
        .setDescription('AP/ HE/ Tank/ Budget')
        .setImage('https://i.imgur.com/GkRDIm0.png')
        message.channel.send(tirpitz);

    }    
}