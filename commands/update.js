module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle("☭Soobrazitelny☭")
        .setURL('')
        .setTimestamp()
        .setDescription('Ahh-ha-ha-haah! Elvtárs! Soobrazitelny vagyok, a Northern Parliament mechanikus zsenije! Ha bármi gépekkel való kapcsolatos ügyekben nézelődsz, akkor ne keress rajtam kívül mást!\n\nSN Kronshtadt felkészül a bevetésre és hamarosan a dokkodat fogja díszíteni a közel jövőben, Parancsnok.')
        .setImage('https://images-ext-1.discordapp.net/external/RbjwSyDQDF5LjXyyUG1GB-Syc14gMVAmFGq-ym_v1Tw/https/pbs.twimg.com/media/FMBT5j_VgAADyyn.jpg')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

 