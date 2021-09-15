module.exports = {
    name: 'update2',
    description: 'update2',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('❀Umikaze❀')
        .setURL('')
        .setDescription('Az átdolgozott Shiratsuyu-osztályú romboló vagyok, Umikaze. Parancsnok, remélhetőleg támogatni foglak téged és flottádat a legjobb képességemmel... Re-remélem jól ki fogunk jönni!\n\nIJN Umikaze felkészül a bevetésre és hamarosan a dokkodat fogja díszíteni a közel jövőben, Parancsnok.')
        .setImage('https://images-ext-1.discordapp.net/external/Be8NI2VB09wQftoOlXeei-6LGHXcXAKl7lSghml65oE/https/pbs.twimg.com/media/E_Pi0f-XoAQpJzk.jpg%3Alarge?width=1284&height=672')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update2);
        if (update2){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}