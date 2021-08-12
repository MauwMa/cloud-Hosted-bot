module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('')
        .setURL('')
        .setDescription('Parancsnokok\n\nA hálózati hiba, amit a instabil hálózat okozott meg lett oldva. A főhadiszállás őszintén bocsánatot kér a probléma miatt. Kompenzálásként a főhadiszállás minden parancsnoknak 100<:gems:790201608855486513> küld. Köszönjük a folyamatos támogatásaitokat.')
        .setImage('https://images-ext-1.discordapp.net/external/2fddijLmSP-q8Ze2ZSeE9ruK8JUbXxmKGx4vBTLe-Us/https/pbs.twimg.com/media/E8mK7OiUYAIFyMv.jpg%3Alarge')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}