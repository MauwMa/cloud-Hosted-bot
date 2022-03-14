module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle("❀Szellős Suhanás❀")
        .setURL('')
        .setTimestamp()
        .setDescription('Kár lenne nem kihasználni ezt a csodálatos időjárást, Parancsnok. Miért lennél a zsúfolt vonaton, mikor évezni tudod a nyugodt biciklizést a napfényben, hm? Heehee♪\n\nIJN Kongou az új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')
        .setImage('https://images-ext-1.discordapp.net/external/dTAFxFWWbf6yQ6pGG4FIpTxwEvB4dBStUepymzwOMHw/https/pbs.twimg.com/media/FNzqAxHaQAEUIzl.jpg')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

 