module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Emlékeztető')
        .setURL('')
        .setDescription('Ezek az iskolai kinézetű öltözékek elérhetőek 7/8 magyar időszámítászerint 9:00-ig.\nKészen állsz, hogy Memphisel és többiekkel tanulj?')
        .setImage('https://images-ext-2.discordapp.net/external/EvJUL-Qt2FSb15W2_XHnxtfwHLlPvO26IMpYk3CdgWk/https/pbs.twimg.com/media/E45WOvzVcAgY2s7.jpg%3Alarge')
        message.channel.send(update);
    if (message.deletable) message.delete();
    }    
}