module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('')
        .setURL('')
        .setDescription('Parancsnokok\n\nÉlveztétek a 3. évfordulós élőközvetítést? Kérjük töltsd ki ezt a kérdőívet visszajelzésképpen. A kérdőív kitöltése után 5 szerencsés Parancsnok között véletlenszerűen 3000<:gems:790201608855486513> osztunk ki.\n\nA kérdőív: https://t.co/0zVsmwjoR0')
        .setImage('')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}