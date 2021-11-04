module.exports = {
    name: 'update2',
    description: 'update2',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('⚜Foch⚜')
        .setURL('')
        .setTimestamp()
        .setDescription('Hellóka~ Szóval te vagy a Parancsnok? Foch vagyok, Suffren osztályból. Magamat egy tapasztalt stratégistának gondolom, szóval remélem hasznosnak fogsz találni~ Hahaha, akárhogyis, örvendek a találkozásnak~\n\nMNF Foch felkészül a bevetésre és hamarosan a dokkodat fogja díszíteni a közel jövőben, Parancsnok.')
        .setImage('https://images-ext-1.discordapp.net/external/DiklRHUHckLgtoRNxECH3L_fuDotQ-IUyZ_CTnm7SL0/https/pbs.twimg.com/media/FDVTJYKVEAI1ETw.jpg%3Alarge?width=1060&height=555')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update2);
        if (update2){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}