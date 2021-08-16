module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('')
        .setURL('')
        .setDescription('Parancsnokok, Boldog 3. Évfordulót!\n\nFőhadiszállás köszöni a támogatást és hogy velünk tartottatok az elmúlt 3 évben.\nBontsuk ki vitorlánkat a következő évfordulónkhoz!')
        .setImage('https://pbs.twimg.com/media/E86dXBcVEAQpIif.jpg:large')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}