module.exports = {
    name: 'build-mainz',
    description: 'build-mainz',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const mainz = new Discord.MessageEmbed()
        .setColor('#f2082d')
        .setTitle('Mainz Build')
        .setURL('')
        .setDescription('Tank(front)/ DPS(Back)/ Helena Fight/ Budget')
        .setImage('https://i.imgur.com/40N0fEz.png')
        message.channel.send(mainz);

    }    
}