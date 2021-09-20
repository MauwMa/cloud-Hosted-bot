module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('⚜Egy-lányú Zenekar⚜')
        .setTitle('')
        .setURL('')
        .setDescription('Igen, a húrok... Hallom az ünnepi dallamot... Most hát, kövess engem és még nagyszerűbbé teszük ezt a zen– Óh, Parancsnok? Azt kérdezed, hogy mi ez az egész? Öhm... Tudod... Ahahaha...\n\nHMNF Vauquelin új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')
        .setImage('https://images-ext-1.discordapp.net/external/RyemabXzAJhCXTLed9gEVuSbwXeBkm_rgt2q_fW7gdI/https/pbs.twimg.com/media/E_uEz9PVUAAC1tc.jpg%3Alarge?width=1112&height=405')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}