module.exports = {
    name: 'unloli',
    description: 'unloli',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const unloli = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Nagato már nem loli többé')
        .setURL('')
        .setDescription('')
        .setImage('https://i.redd.it/5857dj1riqf41.jpg')
        .setTimestamp('valami')
        message.channel.send(unloli);

    }    
}