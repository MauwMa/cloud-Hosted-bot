module.exports = {
    name: 'update3',
    description: 'update3',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('❀Őrizdmeg a hidegvéred❀')
        .setURL('')
        .setTimestamp()
        .setDescription('Üdvöz...?! Mit keresel itt? Várj, ne menj- Csak meglepődtem, ez minden... Nos, mit szeretnél rendelni?\n\nIJN Noshiro új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')
        .setImage('https://images-ext-2.discordapp.net/external/IFr7CtMBF6ARbcMTTJrui3Nws4rPz3TqGrgkksvuwC4/https/pbs.twimg.com/media/FHhHr1jUcAILo88.jpg%3Alarge?width=950&height=548')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update3);
        if (update3){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}