module.exports = {
    name: 'build-mutsuki',
    description: 'build-mutsuki',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const mutsuki = new Discord.MessageEmbed()
        .setColor('#ff90ff')
        .setTitle('Mutsuki Build')
        .setURL('')
        .setDescription('But why?/ Manual/ Auto/ Budget')
        .setImage('https://i.imgur.com/KfzKB0X.png')
        message.channel.send(mutsuki);

    }    
}