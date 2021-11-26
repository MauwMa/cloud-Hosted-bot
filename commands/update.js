module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Hálaadás')
        .setURL('')
        .setTimestamp()
        .setDescription('Parancsnokok, az Azur Lane 2021 Hálaadás merch elérhető lett. Látogass el a boltba, hogy megnézd őket. Emellet, 10% kedvezmény azokra a rendelésekre, amelyek 100$ felett vannak!\n\nBolt Link: https://t.co/fdl58JV2d9\n\nEmail: store.cs@yo-star.com')
        .setImage('https://images-ext-1.discordapp.net/external/BO9dDXPlmNLBiX8VFlIIetWGEgPBM_t-jV_OeTMzvdc/%3Fformat%3Dpng%26name%3D386x202/https/pbs.twimg.com/card_img/1463337155200262146/xtb9XNf3')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

 