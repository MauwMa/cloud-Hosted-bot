module.exports = {
    name: 'tesz',
    description: 'teszt',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const teszt = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Nagato már nem loli többé')
        .setURL('')
        .setDescription('')
        .setImage('https://i.imgur.com/qzMzc8c.jpg', 'https://i.imgur.com/qzMzc8c.jpg')
        .setTimestamp()
        message.channel.send(teszt);

    }    
}