module.exports = {
    name: 'update2',
    description: 'update2',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png%22")
        .setTitle("⚓Az Égi Kegyelem Mintaképe⚓")
        
        .setTimestamp()
        .setDescription(`Igazán megtisztelőnek érzem, hogy együtt élvezhetjük ezt a csodálatos kilátást emme ünnepi alkalomkor, Parancsnok. Öhm... Nem csak udvariasságból mondom. Ritkán van ilyenekre alkalmunk, emiatt kicsit hízelegve érzem magam...\n\nROC Yat Sen az új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.`)
        .setImage('https://images-ext-2.discordapp.net/external/u3HgVcaJEEnGoc68G9GV3jM_mUnjruds5nCR7ZSaCRo/https/pbs.twimg.com/media/FmRL3JYaYAEflmt.jpg?width=1193&height=671')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update2);
        if (update2){
            return message.channel.send('Elküldtem az updatet nyaaa~');  
          }
    }
}