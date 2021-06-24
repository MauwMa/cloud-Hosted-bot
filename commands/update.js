module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('❀Dragon Hunter: Ryuujous Rise❀')
        .setURL('')
        .setDescription('IJN Ryuujou új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')
        .setImage('https://images-ext-2.discordapp.net/external/IC0NMaU4eP6Uzsp830QhGHO_C3WPPmZOwQEfWaAaMlM/https/pbs.twimg.com/media/E4lNUNrVIAEHWmW.jpg%3Alarge?width=1365&height=675')
        message.channel.send(update);
    if (message.deletable) message.delete();
    }    
}