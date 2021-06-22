module.exports = {
    name: 'unloli',
    description: 'unloli',
    execute (client, message, args, Discord){
        const unosloli = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Nagato már nem loli többé')
        .setURL('')
        .setDescription('')
        .setImage('https://i.redd.it/5857dj1riqf41.jpg')
        message.channel.send(unosloli);

    }    
}