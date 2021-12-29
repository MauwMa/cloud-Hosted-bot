module.exports = {
    name: 'unloli',
    description: 'unloli',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const unloli = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Nagato már nem loli többé')
        .setURL('')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('')
        .setImage('https://i.redd.it/5857dj1riqf41.jpg')
        .setTimestamp()
        message.channel.send(unloli);

    }    
}