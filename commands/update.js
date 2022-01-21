module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle("❀A Táncoló Felhők Köntöse❀")
        .setURL('')
        .setTimestamp()
        .setDescription('Parancsnok, köszönöm hogy eljöttél megnézni. Jelenleg elpróbálom az előadásomat a Tavaszi Fesztiválra. Remélem el fogja nyerni tetszésedet.\n\nIJN Asashio új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')
        .setImage('https://images-ext-2.discordapp.net/external/f751syJdj1EVJ92_gc0weW_oK3WBdnhgIrSsKA-bwYg/https/pbs.twimg.com/media/FJimzk8VUAA-Us6.jpg%3Alarge?width=1034&height=548')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

 