module.exports = {
    name: 'update2',
    description: 'update2',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle('★Tavaszi Ihlet★')
        .setURL('')
        .setTimestamp()
        .setDescription(`Ezt nézd meg, Parancsnok! Hehehe, hozzáadtam egy tüzijáték kilövőt a szuperhős felszerelésemhez. Menő, mi? ...Jobban érdeklődsz az új kinézetem után? De,,, a tűzijáték...\n\nUSS Reno új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')`)        
        .setImage('https://images-ext-2.discordapp.net/external/OMdBgYpthh7xcjAu_g5JUaOZ6U6WrU-imra1BMfUP1c/https/pbs.twimg.com/media/FJXyThAacAA5A9C.jpg%3Alarge?width=1034&height=548')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update2);
        if (update2){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}