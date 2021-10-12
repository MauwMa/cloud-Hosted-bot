module.exports = {
    name: 'build-prinzeugen',
    description: 'build-prinzeugen',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const prinzeugen = new Discord.MessageEmbed()
        .setColor('#f2082d')
        .setTitle('Prinz Eugen Build')
        .setURL('')
        .setDescription('AP | More AP | HE but why? | Budget')
        .setImage('https://i.imgur.com/fVJaz4B.png')
        .setTimestamp()
        message.channel.send(prinzeugen);

    }    
}