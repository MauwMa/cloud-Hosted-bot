module.exports = {
    name: 'update2',
    description: 'update2',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle('☭Egy ellenállhatatlan AR kaland☭')
        .setURL('')
        .setTimestamp()
        .setDescription(`Itt Volga. Jelenleg egy fontos szemtanút követek, *korgás* ...Azért korog a hasam, mert ez a AR játék ilyen sok staminát követel? Áhh, elvesztettem a szemtanút...\n\nSN Volga új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.`)        
        .setImage('https://images-ext-2.discordapp.net/external/Oldj6QDCqSF2VoH1CHV3gbBHDA5ilMZZgi-sM4Qf23U/https/pbs.twimg.com/media/FMHQtYcVUAIn7pP.jpg')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update2);
        if (update2){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}