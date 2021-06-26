module.exports = {
    name: 'update2',
    description: 'update2',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Event')
        .setURL('')
        .setDescription('Kazagumo, Shirayuki és a többiek, kik jelenleg építhető 7/8 magyar időszámítás szerint reggel 9:00-ig lesznek elérhetők!')
        .setImage('https://images-ext-2.discordapp.net/external/AELr3QTzLhHxC4k6c43E_jiq7iGItTZVFjNdwG1ZUGU/https/pbs.twimg.com/media/E4t9tpaVgAUz5ex.jpg%3Alarge')
        message.channel.send(update2);
    if (message.deletable) message.delete();
    }    
}