module.exports = {
    name: 'update3',
    description: 'update3',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle('⚓Hai Chi⚓')
        .setURL('')
        .setTimestamp()
        .setDescription('Te vagy a parancsnok? Hahah, rengeteg dolgot hallottam rólad! Óh igaz, elfelejtettem bemutatkozni! Hai Chi vagyok, Hai Tien-osztályú cirkáló. A két kedvenc dolgom a tradicionális opera és a kirándulás! ...De, hagyjuk a csevegést. Többet fogsz megtudni rólam előbb-utóbb ammúgy is!\n\nHai Chi felkészül a bevetésre és hamarosan a dokkodat fogja díszíteni a közel jövőben, Parancsnok.')
        .setImage('https://images-ext-2.discordapp.net/external/CIlx_SJcKmPrc3zrfmMWGZ5QWvbHFIhaLGNlImOvCDs/https/pbs.twimg.com/media/FKBZPnNagAMPxMu.jpg%3Alarge?width=1291&height=676')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update3);
        if (update3){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}