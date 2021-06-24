module.exports = {
    name: 'build-suzutsuki',
    description: 'build-suzutsuki',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const suzutsuki = new Discord.MessageEmbed()
        .setColor('#ff90ff')
        .setTitle('Suzutsuki Build')
        .setURL('')
        .setDescription('dps/ AA/ Anti sub/ Budget')
        .setImage('https://i.imgur.com/s6BjADP.png')
        message.channel.send(suzutsuki);

    }    
}