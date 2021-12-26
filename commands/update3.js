module.exports = {
    name: 'update3',
    description: 'update3',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('✠Ideje Felmutatni?✠')
        .setURL('')
        .setTimestamp()
        .setDescription('Köszönöm a türelmeteket. Nagy korsó Iron Blood sör ahogy az rendel- M-Miiii?! Ahhh...! Fhuuu, valahogy sikerült nem kiöntenem egy cseppet sem... M-Mit akarsz?\n\nKMS Elbe új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')
        .setImage('https://images-ext-1.discordapp.net/external/W6r1iLgYui-T8k3sRq0OlOv1lSt5K37XbKzD9NmJRYw/https/pbs.twimg.com/media/FHciGjLUUAIDu44.jpg%3Alarge?width=950&height=548')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update3);
        if (update3){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}