module.exports = {
    name: 'build-jeanbart',
    description: 'build-jeanbart',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const jeanbart = new Discord.MessageEmbed()
        .setColor('#f2082d')
        .setTitle('Jean Bart Build')
        .setURL('')
        .setDescription('AP | HE | JB | Budget')
        .setImage('https://i.imgur.com/fN0RyHh.png')
        message.channel.send(jeanbart);

    }    
}