module.exports = {
    name: 'update2',
    description: 'update2',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('♚Cukrászsütemény Hercegnő♚')
        .setURL('')
        .setTimestamp()
        .setDescription(`"Kérlek, Mester, ments meg." ...Öeh, Nem tudok a szerepbe kerülni. Milyen hangsúlyra törekedjek, drága?\n\nHMS Howe új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.`)        
        .setImage('https://images-ext-2.discordapp.net/external/PapbQ3XCB8e3pYwgFqJJI3Y8dClcbYW4p2AU1DTNY60/https/pbs.twimg.com/media/FHcin0gVkAElypZ.jpg%3Alarge?width=950&height=548')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update2);
        if (update2){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}