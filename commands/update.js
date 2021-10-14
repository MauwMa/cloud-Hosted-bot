module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('')
        .setURL('')
        .setTimestamp()
        .setDescription('Parancsnokok,\n\n Volt egy hiba amely megengedte, hogy a "Popularity Poll"-ban lehetett szavazni Bismarckra. Top 3 volt 2019-ben ezért nem jogosult a szavazásra. Az összes szavazat, amely Bismarckra lett használva vissza lett küldve üzenetben. Elnézést a kellemetlenségért.')
        .setImage('https://images-ext-2.discordapp.net/external/x3FlMERywGpP07X7X6y-Tgbmf0_L9D3WStfvGtZmowU/https/pbs.twimg.com/media/FBq4DBRUUAQEiKG.jpg%3Alarge')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}