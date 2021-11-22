module.exports = {
    name: 'update2',
    description: 'update2',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('★Namiko★')
        .setURL('')
        .setTimestamp()
        .setDescription('Pacsi, itt Namiko! Öhm, várj, ez az a másik világba reinkarnáció dolog, ami szuper népszerű? ...Nem az, aham. Nos, akárhogyis, örvendek a szerencsének.\n\nNamiko felkészül a bevetésre és hamarosan a dokkodat fogja díszíteni a közel jövőben, Parancsnok.')        
        .setImage('https://images-ext-2.discordapp.net/external/wjI1sDTUuVLhGG_lGTQo72lmvIGeKcnlVG3gIQBVuSU/https/pbs.twimg.com/media/FEy3qUSVkAA7o9s.jpg%3Alarge?width=1101&height=551')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update2);
        if (update2){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}