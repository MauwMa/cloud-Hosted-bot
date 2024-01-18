module.exports = {
    name: 'update3',
    description: 'update3',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle(`★Guam★`)
        
        .setDescription(`Guam vagyok, Alasaka osztály második hajója - még mindig dolgozom a becenevemen! Csak a háború utolsó perceire készültem el, viszont még mindig elkápráztatok mindenkit!\n\nUSS Guam felkészül a bevetésre és hamarosan a dokkodat fogja díszíteni a közel jövőben, Parancsnok.`)
        .setImage('https://images-ext-2.discordapp.net/external/SgdPO1MiNtHpF8RQiQqYiKs-G-gSfSxuhyOy1Z8EIeM/https/pbs.twimg.com/media/GBYa8OMakAAc3UY.jpg?format=webp')
        .setTimestamp()
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update3);
        if (update3){
            return message.channel.send(`Elküldtem az updatet nyaaa~ `);   
          }
    }
}  