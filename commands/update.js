module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('❀Éjszakát-Megvilágító Fesztivál❀')
        .setURL('')
        .setDescription('Itt – a– nyári– fesztivál–!! Öhm, nos, talán kicsit késő a "nyári" fesztiválhoz, szóval talán sima fesztivál is megteszi? Bárhogy is legyen a fontos dolog, hogy szórakozz, Parancsnok! Mert én biztos, hogy rengeteget fogok!\n\nIJN Katsuragi új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')
        .setImage('https://images-ext-2.discordapp.net/external/gsHaGgqiDAjrk9f0lexkQHa_s8yVAgNi8Y2t9u3c8N4/https/pbs.twimg.com/media/E_KGEKhUcAM2_-G.jpg%3Alarge?width=1240&height=676')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}