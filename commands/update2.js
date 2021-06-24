module.exports = {
    name: 'update2',
    description: 'update2',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('❀After-School Melody❀')
        .setURL('')
        .setDescription('IJN Kazagumo új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')
        .setImage('https://images-ext-1.discordapp.net/external/g_CSahZTv0kdHtxgE3GaxrMalEONt-uYdbv9jHrwAfo/https/pbs.twimg.com/media/E4onANSVcAYDN7W.jpg%3Alarge?width=1839&height=910')
        message.channel.send(update2);
    if (message.deletable) message.delete();
    }    
}