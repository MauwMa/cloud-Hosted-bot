module.exports = {
    name: 'noshiro',
    description: 'noshiro',
    execute (client, message, args, Discord){
        const noshiro = new Discord.MessageEmbed()
        .setColor('#ff90ff')
        .setTitle('Noshiro Build')
        .setURL('')
        .setDescription('Balanced/ Tank/ Torp/ Budget')
        .setImage('https://i.imgur.com/xzIwTb4.png')
        message.channel.send(noshiro);

    }    
}