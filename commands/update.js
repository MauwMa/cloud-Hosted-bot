module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle("")
        .setURL('')
        .setTimestamp()
        .setDescription('Parancsnokok,\n\n A Port Café butorzat szett elérhető egészen Január 13. magyar időszámítás szerint 07:59-ig. Ne hagyjátok ki az esélyt, hogy megszerezzétek őket~')
        .setImage('https://images-ext-1.discordapp.net/external/_4eEQJhJB1Vk7KD1gZALoWylZSugTA_zJgK_RIwC-A0/https/pbs.twimg.com/media/FIPuXbkVQAEB2lA.jpg%3Alarge')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

 