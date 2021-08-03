module.exports = {
    name: 'teszt',
    description: 'teszt',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const teszt = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('teszt')
        .setURL('')
        .setDescription('Parancsnokok,\n\n A közelgő karbantartás kötelező frissítés lesz az Azur Lanehez. Kérünk mindenki bizonyosodjon meg róla, hogy a le van kötve a felhastnálótók az elvesztése érdekében. Minden parancsnokot 200<:gems:790201608855486513> fogunk kompenzálni')
        .setImage('')
        client.channels.cache.find(channel => channel.id === "791956226521956394").send(teszt);
        if (teszt){
            return message.channel.send(`A teszt üzenet ki lett küldve nyaaa~`);
          }

    }    
}