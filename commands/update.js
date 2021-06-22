module.exports = {
    name: 'update',
    description: 'update',
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('★A Breath of Fresh Air★')
        .setURL('')
        .setDescription('USS Memphis új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')
        .setImage('https://images-ext-2.discordapp.net/external/dIcxZ4Z8cGlL0yFzTJto-B2i6Jlm6r9fiJdqif8A19w/https/pbs.twimg.com/media/E4fpacFWQAMUDwK.jpg%3Alarge?width=1839&height=910')
        message.channel.send(update);
    if (message.deletable) message.delete();
    }    
}