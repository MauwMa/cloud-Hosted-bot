module.exports = {
    name: 'teszt',
    description: 'teszt',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const teszt = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('teszt')
        .setURL('')
        .setDescription('Parancsnokok,\n\n A közelgő karbantartás kötelező frissítés lesz az Azur Lanehez. Kérünk mindenkit bizonyosodjon meg róla, hogy le van kötve a felhasználótók az elvesztése elkerülésére. Minden parancsnokot 200<:gems:790201608855486513> fogunk kompenzálni')
        .setImage('')
        client.channels.cache.find(channel => channel.id === "791956226521956394").send(teszt);
        if (teszt){
            return message.channel.send(`A teszt üzenet ki lett küldve nyaaa~`);
          }

    }    
}