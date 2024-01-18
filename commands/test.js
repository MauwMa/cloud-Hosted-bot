module.exports = {
    name: 'test',
    description: 'test',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const test = new Discord.MessageEmbed()
        .setColor('WHITE')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle(`⛨Az Esőben Ülni⛨`)
        
        .setDescription(`Balszerencséről beszélve, felhőszakadás kapott el minket. Sajnálatosan, úgy tűnik hogy itt ki kell várnunk, Parancsnok.\n\nRN Littorio az új kinézetébe öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.`)
        .setImage('https://images-ext-1.discordapp.net/external/yLHWP08Qm9eeI9G6PY9xVgUamhuRD6cahiYzk5-wcz8/https/pbs.twimg.com/media/Fzs_K2QacAIYM12.jpg?width=1193&height=671','https://images-ext-1.discordapp.net/external/yLHWP08Qm9eeI9G6PY9xVgUamhuRD6cahiYzk5-wcz8/https/pbs.twimg.com/media/Fzs_K2QacAIYM12.jpg?width=1193&height=671')
        .setTimestamp()
        client.channels.cache.find(channel => channel.id === "853629612986990612").send(test);
        if (test){
            return message.channel.send(`Elküldtem az updatet nyaaa~ `);   
          }
    }
}

