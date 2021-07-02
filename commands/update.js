module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Tájékoztató')
        .setURL('')
        .setDescription('Júliusi bejelentkezős bútor: Nyári Buborék Medence')
        .setImage('https://images-ext-2.discordapp.net/external/IwsYJHo4Y0fb19i7uVruXSCN3uCMBpDwHhfnKazZeGY/https/pbs.twimg.com/media/E5SObc-VcAUGTFH.jpg%3Alarge?width=1370&height=623')
        message.channel.send(update);
    if (message.deletable) message.delete();
    }    
}