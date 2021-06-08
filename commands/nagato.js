module.exports = {
    name: 'nagato',
    description: 'nagato',
    execute (message, args, Discord){
        const newEmbed1 = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Operation Siren Útmutatók')
        .setURL('')
        .setDescription('')
        .addFields('')
        .setImage('https://pbs.twimg.com/media/D3TwNO6V4AAqRvc.jpg')
        message.channel.send(newEmbed1);

    }    
}