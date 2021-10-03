module.exports = {
    name: 'build-fdg',
    description: 'build-fdg',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const fdg = new Discord.MessageEmbed()
        .setColor('#f2082d')
        .setTitle('Friedrich der Große Build')
        .setURL('')
        .setDescription('HE | AP | CH 13 | Budget')
        .setImage('https://i.imgur.com/KlgHj6t.png')
        .setTimestamp()
        message.channel.send(fdg);

    }    
}