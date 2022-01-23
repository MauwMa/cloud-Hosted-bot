module.exports = {
    name: 'update3',
    description: 'update3',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle('♚A Hibátlan Szépség♚')
        .setURL('')
        .setTimestamp()
        .setDescription('Akashi, következőnek nézzek a kamerába? Értettem. Óh, Parancsnok, nem számítottam rá hogy megáldasz minket a jelenléteddel! Igen, a fotózkodás zökkenőmentesen zajlik. Amúgy meg, van kedvenc pózod amit szeretnél látni?\n\nHMS Rodney új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')
        .setImage('https://images-ext-2.discordapp.net/external/6jWjmIQFmf5ywvnuh33QA-lnw8frex-ZmP6ryTeaBfw/https/pbs.twimg.com/media/FJsV4hbVIAAsM1v.jpg%3Alarge?width=1274&height=676')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update3);
        if (update3){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}