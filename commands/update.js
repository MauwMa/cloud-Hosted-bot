module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Merch')
        .setURL('')
        .setTimestamp()
        .setDescription('Parancsnokok, az Azur Lane 2021 Halloween Lucky Bag elérhető. Látogassatok el a boltba. Kíváncsi vagyok, mit fogtok onnan szerezni, nyaaa~\n\nBolt Link: https://t.co/fdl58JV2d9\n\nEmail: store.cs@yo-star.com')
        .setImage('https://images-ext-1.discordapp.net/external/HJwmbBxyFdded-W6-ujrjzPl_uTiJ3BgT7QsTsQlZx8/%3Fformat%3Dpng%26name%3D386x202/https/pbs.twimg.com/card_img/1453189827134988292/ZKxFoG9G')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}