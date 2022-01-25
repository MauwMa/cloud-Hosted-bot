module.exports = {
    name: 'update2',
    description: 'update2',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle('♚Hajdani Növénygyűjtő♚')
        .setURL('')
        .setTimestamp()
        .setDescription(`Hogyan érzed magad, Parancsnok? Hehe, most nem hordom a megszokott nővéri köpenyemet, de úgy hiszem nem nagyon különböző~\n\nHMS Hermione új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.`)        
        .setImage('https://images-ext-1.discordapp.net/external/T35AxVFXre5ZCx7ThL1jmHSWKABUYAcMN7XpncZ6nAo/https/pbs.twimg.com/media/FJ2y0qNaMAUt6nK.jpg%3Alarge?width=1274&height=676')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update2);
        if (update2){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}