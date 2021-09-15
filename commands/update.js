module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('❀Succubusok vagyunk?❀')
        .setURL('')
        .setDescription('Öhm... Ez a ruha kicsit túl sok... Parancsnok, Én... nem nézek helyzetnek felelőtlenül, ugye...?\n\nIJN Yura új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')
        .setImage('https://images-ext-2.discordapp.net/external/ig01JECEbmjH-hER0p_4AGmTnBOa00eblXUCTJ8iB5s/https/pbs.twimg.com/media/E_PlJOsWQAM8Qxc.jpg%3Alarge?width=1232&height=672')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}