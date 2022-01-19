module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle("❀Firecrackers and Steamed Buns❀")
        .setURL('')
        .setTimestamp()
        .setDescription('Mmh... Boldog Új Évet. Azon vagyok, hogy a petárdákat a barátaimhoz vigyem... A buci amit eszek? Ezt a erőfeszítéseimért kaptam köszönetképp.\n\nIJN Yoizuki új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')
        .setImage('https://images-ext-2.discordapp.net/external/iEUk0Ekl1HHPEWpXUi-MI4Rg_68LK-LNqrIzvSXQOpU/https/pbs.twimg.com/media/FJXylblaUAIgLr7.jpg%3Alarge?width=1034&height=548')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

 