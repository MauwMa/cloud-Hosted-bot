module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('🔥Gneisenau META🔥')
        .setURL('')
        .setTimestamp()
        .setDescription('Te vagy... a Parancsnok, igaz? Más szóval, az egyetlen akinek van hatalma irányítania engem. Habár egyátalán nem érdeklődöm irántad mint személy, mégis engedelmeskedni fogok a parancsaidnak... Legalábbis egy darabig.\n\nHelena META hamarosan leszáll közénk. Parancsnok, képes vagy legyőzni és betoboroznod a kikötődbe?')
        .setImage('https://images-ext-1.discordapp.net/external/OXKzbRHKEYaH6ojwS85M4OUce_xpzDz0QdoTZ3_03BM/https/pbs.twimg.com/media/FFu8_KHaIAMc_s3.jpg%3Alarge?width=1079&height=551')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

 