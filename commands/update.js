module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle("♚Igenis, Őcselédsége♚")
        .setURL('')
        .setTimestamp()
        .setDescription('Warspite, mi az isten minden ez... A Cseléd Csapatnak át kell nyálaznia magát mindezen a papírmunkán? Már el is fáradtam... bárcsak sosem mondtam volna, hogy meg akarom tapasztalni milyen cselédnek lenni... És te, hagyd abba a bámulást és segíts végre, szolgám!\n\nHMS Queen Elizabeth az új L2D ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok..')
        .setImage('https://images-ext-2.discordapp.net/external/V90XV2fe4-d0pyWbuDA027dWAO3VV2oTWP8RqhyrixQ/https/pbs.twimg.com/media/FHsMuRaUcAECcpK.jpg%3Alarge')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

 