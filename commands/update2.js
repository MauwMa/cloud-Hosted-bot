module.exports = {
    name: 'update2',
    description: 'update2',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle('❀Nestling Up for the Long Nights❀')
        .setURL('')
        .setTimestamp()
        .setDescription(`\n\nIJN Naganami új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.`)        
        .setImage('https://images-ext-2.discordapp.net/external/bZnu8eESn5z-0Qrv_NLsatfm-HvYCE_-F9AUxNeldBA/https/pbs.twimg.com/media/FJ8Gjz8agAIB00b.jpg%3Alarge?width=1274&height=676')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update2);
        if (update2){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}