module.exports = {
    name: 'build-tirpitz',
    description: 'build-tirpitz',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const tirpitz = new Discord.MessageEmbed()
        .setColor('#f2082d')
        .setTitle('Tirpitz Build')
        .setURL('')
        .setDescription('AP/ HE/ Tank/ Budget')
        .setImage('https://i.imgur.com/GkRDIm0.png')
        message.channel.send(tirpitz);

    }    
}