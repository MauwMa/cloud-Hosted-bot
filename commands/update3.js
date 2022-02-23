module.exports = {
    name: 'update3',
    description: 'update3',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle('☭Azur Lane Abyssal Refrain Animáció PV☭')
        .setURL('')
        .setTimestamp()
        .setDescription('Az Új Northern Parliament fő event, Abyssal Refrain, Február 24.-én fog kezdődni. Az event bemutatja az új Ultra Rare Karge Cruisert, Kronshtadt és még megannyit!\n\nSN Volga felkészül a bevetésre és hamarosan a dokkodat fogja díszíteni a közel jövőben, Parancsnok.')
        .setImage('')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update3);
        if (update3){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}