module.exports = {
    name: 'build-friedrich',
    description: 'build-friedrich',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const friedrich = new Discord.MessageEmbed()
        .setColor('#f2082d')
        .setTitle('friedrich der Große Build')
        .setURL('')
        .setDescription('HE | AP | CH 13 | Budget')
        .setImage('https://i.imgur.com/KlgHj6t.png')
        message.channel.send(friedrich);

    }    
}