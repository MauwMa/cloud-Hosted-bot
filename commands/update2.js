module.exports = {
    name: 'update2',
    description: 'update2',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('★A Lehetőség Hátszele★')
        .setURL('')
        .setTimestamp()
        .setDescription('Csak meg kell etetni egy érmével és mozgatni a kampót a karral... Óh! Elkaptam egyet! Ez könnyebb volt, mint gondoltam.!\n\nUSS Independence az új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')        
        .setImage('https://images-ext-2.discordapp.net/external/u2z6gpXEqvW2JAxlhtwRvJj4xWlmhq_exzJYY3lwV4g/https/pbs.twimg.com/media/FE96LPwVQAwJRJq.jpg%3Alarge?width=1113&height=551')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update2);
        if (update2){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}