module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle("✠Új Évi Kémia✠")
        .setURL('')
        .setTimestamp()
        .setDescription('A mai kémia órán megtanuljuk, hogy hogyan melegítsük fel a bögre teánkat és az opcionális főzetet hogy erősítsük az ízét! Vállalod az ízének kóstolásának megtiszteltetését, Parancsnok? \n\nKMS U-73 új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')
        .setImage('https://images-ext-2.discordapp.net/external/kzz8fvKbwKl5btl9VCd0hBuK8diFWp2VFjAxXoJUddw/https/pbs.twimg.com/media/FJ8FO2aakAAOCqK.jpg%3Alarge?width=1274&height=676')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

 