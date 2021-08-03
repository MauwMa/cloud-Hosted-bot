module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('')
        .setURL('')
        .setDescription('Parancsnokok,\n\n A közelgő karbantartás kötelező frissítés lesz az Azur Lanehez. Kérünk mindenki bizonyosodjon meg róla, hogy a le van kötve a felhastnálótók az elvesztése érdekében. Minden parancsnokot 200<:gems:790201608855486513> fogunk kompenzálni. ')
        .setImage('https://images-ext-1.discordapp.net/external/XHfJ2m6qEUXGFerh8-BWt_-aVqRSiUUj1jSdrKzqUHM/https/pbs.twimg.com/media/E7x7jS9VEAI2NXF.jpg%3Alarge')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}