module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle("❀Hajnal-Phoenix hívása❀")
        .setURL('')
        .setTimestamp()
        .setDescription('Ez a bankett az ajándékom neked... és a jelenléted a legnagyszerűbb jutalom, amire valha is reménykedtem~ Így igaz, nem foglak elengedni este, amíg eszméletedet el nem veszted. Ehehe... Ahahaha~♡\n\nIJN Akagi az új L2D ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')
        .setImage('https://images-ext-1.discordapp.net/external/zdk8Yqs7GMHwjxTZEymsB7r4Xwmj8b3W9_B55iCYQj0/https/pbs.twimg.com/media/FJTf1KPaIAA2J89.jpg%3Alarge?width=1034&height=548')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

 