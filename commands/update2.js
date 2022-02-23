module.exports = {
    name: 'update2',
    description: 'update2',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle('☭Az Utcai Ezüst Szónáta☭')
        .setURL('')
        .setTimestamp()
        .setDescription(`Megnyugtat, hogy itt látlak. Tudom, hogy ez az ellenörzés simán fog menni amíg te itt vagy. Mhm, minden rendben.\n\nSN Kiev új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.`)        
        .setImage('https://images-ext-2.discordapp.net/external/j1pl1mn49dzBENf9Cf61Y4dS-i617b6foQUsAXAZBhg/https/pbs.twimg.com/media/FMMal-QVkAEWexj.jpg')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update2);
        if (update2){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}