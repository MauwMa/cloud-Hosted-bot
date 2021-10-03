module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Emlékeztető')
        .setURL('')
        .setTimestamp()
        .setDescription('"Upon the Shimmering Blue" event és eventes hajók 10/4 magyar időszámítás szerint 09:00-ig lesz elérhető. Kérjük a beosztásaitokat tervezzétek e szerint.')
        .setImage('https://i.imgur.com/QxNKPzU.jpg')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}