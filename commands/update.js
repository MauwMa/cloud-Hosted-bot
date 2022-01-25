module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle("⚓A Csodák Előcsarnoka⚓")
        .setURL('')
        .setTimestamp()
        .setDescription('Itt vagy, Parancsnok, mint ahogy megígérted. Hogyan tetszik az itteni légkör? Hehe, foglalj helyet és élvezd lassan a teádat. Végül is, rengeteg időnk van~\n\nChen Hai új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')
        .setImage('https://images-ext-2.discordapp.net/external/hwINYao_P-LJNUpqf7_uTFbW621IZ-xr47UtEBBT2JQ/https/pbs.twimg.com/media/FJ3yioragAU_SJt.jpg%3Alarge?width=1274&height=676')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

 