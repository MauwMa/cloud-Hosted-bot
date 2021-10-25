module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('⚜Napfény, Tengeri fuvallat, and Szentség')
        .setURL('')
        .setTimestamp()
        .setDescription('Miért nem lazítasz egy kicsit, mielőtt végiggondolnád a nap történéseit? Biztosan sokkal hatásosabb lenne úgy.\n\nIJN Noshiro az új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')
        .setImage('https://images-ext-1.discordapp.net/external/AEgrIMe3hpVbz7LcPnbMmmI7YdyZTkk6u4Bj1UWny9Y/https/pbs.twimg.com/media/FCip1StVIAcllYQ.jpg%3Alarge?width=1202&height=676')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}