module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle("❀Szerencsés Csokoládé❀")
        .setURL('')
        .setTimestamp()
        .setDescription('Rendben, ennek jónak kell lennie... Hé, buta Parancsnok ne csak álldogálj. Igen, te. Ne üsd bele az orrod. Te leszel az első, aki megkapja az ÉN csokimat, szóval jobban teszed ha háládat könnyekben fejeznéd ki.\n\nIJN Shigure új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')
        .setImage('https://images-ext-1.discordapp.net/external/fLkz61nvkRK2Jz1CiQJkYNjCOElQagPQ6sm-ZDzzPpM/https/pbs.twimg.com/media/FLEBK_0VQAAgzyc.jpg%3Alarge?width=1005&height=548')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

 