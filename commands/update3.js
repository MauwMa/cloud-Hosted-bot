module.exports = {
    name: 'update3',
    description: 'update3',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle('⚓An Shan (Retrofit)⚓')
        .setURL('')
        .setTimestamp()
        .setDescription('An Shan, retrofittelése kész! Ezzel az új erővel, Parancsnok, meg foglak védeni téged és húgaimat! De először... Öhm, ellenőrzöm hogy hogyan is működnek ezek a rakéták...!\n\nHMS Rodney új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')
        .setImage('https://images-ext-2.discordapp.net/external/fmvnDQAxKt3YtcrRtk59EL88kOeuQtP17pmgKdIBnvU/https/pbs.twimg.com/media/FJ2lb7qaAAAldUe.jpg%3Alarge?width=405&height=676')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update3);
        if (update3){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}