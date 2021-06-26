module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('FREEGEMS')
        .setURL('')
        .setDescription('Hogy megünnepeljük a harmadik évfordulús Rajz és Cosplay verseny iránti túlzott lelkesedést, HQ 200gemet és egyéb jutalmat küldött minden játékosnak!')
        .setImage('https://images-ext-1.discordapp.net/external/0ayfzNi0hSAfwgUxWQprhGObqrLNoAT5JBle-8nJmm4/https/pbs.twimg.com/media/E4yfrI8VcAUkcJB.jpg%3Alarge')
        message.channel.send(update);
    if (message.deletable) message.delete();
    }    
}