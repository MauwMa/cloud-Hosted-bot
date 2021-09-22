module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('⛨Kisasszony meghívója⛨')
        .setURL('')
        .setDescription('"A legfaragatlanabb dolog lenne visszautasítani egy kisasszony meghívóját"... Hehe~ Most hát, Parancsnok, szeretnél egy kis frissítőt? Nem kell aggódnod, mind alkoholmentes♪ \n\nRN Vincenzo Gioberti új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')
        .setImage('https://images-ext-2.discordapp.net/external/4sekEXmP_k7jTCnYu9Pk8r8zcn3Yyg4mcLqmT5EGpCc/https/pbs.twimg.com/media/E_40KbVVQAQwE8P.jpg%3Alarge?width=1920&height=698')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}