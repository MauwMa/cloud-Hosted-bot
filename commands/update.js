module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle("♚A Gyógyítás Vörös Kamrája♚")
        .setURL('')
        .setTimestamp()
        .setDescription('*Combjaira üt* Mester, te szegény teremtés~ Nézzenek oda milyen keményen dolgozol~ Hehe, gyere ide gyorsan, hogy el tudjalak kényesztetni~\n\nHMS Charybdis az új L2D ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')
        .setImage('https://images-ext-1.discordapp.net/external/RaGqFcmJdmTiw5-s7n1pZs1xL7oTWiaEdRjg9Y3ilaQ/https/pbs.twimg.com/media/FJwZgCUVgAA2OJU.jpg%3Alarge?width=1274&height=676')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

 