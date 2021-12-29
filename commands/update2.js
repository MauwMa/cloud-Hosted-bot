module.exports = {
    name: 'update2',
    description: 'update2',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('⛨A Szív Királynő⛨')
        .setURL('')
        .setTimestamp()
        .setDescription(`Én? Szolgáljak neked, mint cseléd? Oho! Zene füleimnek, Parancsnok! Milyen csodálatos és ambiciózus tőled! ...Csak ideiglenesig? És te elégedett vagy vele?\n\nRN Marco Polo új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.`)        
        .setImage('https://images-ext-1.discordapp.net/external/pNlI-dZjvjFin1S68Sjbon4VjEY8xLrkH25W0MNIXg4/https/pbs.twimg.com/media/FHsOQGvVkAMRLHt.jpg%3Alarge')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update2);
        if (update2){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}