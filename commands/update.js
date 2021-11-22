module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('★Hass★')
        .setURL('')
        .setTimestamp()
        .setDescription('Helló, Hass vagyok. Hirtelen erre a furcsa helyre sodort a szél... De, elég érdekesnek tűnik. Amúgy meg, nem próbléma ha itt videóznék?\n\nHass felkészül a bevetésre és hamarosan a dokkodat fogja díszíteni a közel jövőben, Parancsnok.')
        .setImage('https://images-ext-1.discordapp.net/external/bbtVc5cuQ81-GHs7L-1zuDFFIP1pT2eMqRYQcn6ga0E/https/pbs.twimg.com/media/FEy3RDGVkAIi-Rq.jpg%3Alarge?width=1101&height=551')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

