module.exports = {
    name: 'update',
    description: 'update',
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Kollab')
        .setURL('')
        .setDescription('★Azur Lane X THE IDOLM@STER kollaborálás★\n\nTöbb információ a kollaborálásról hamarosan nyaaa~.')
        message.channel.send(update);
    if (message.deletable) message.delete();
    }    
}