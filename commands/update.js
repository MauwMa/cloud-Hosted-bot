module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('3. évforduló Élő Közvetítés')
        .setURL('')
        .setDescription('Parancsnokok, Dunkerque és Haruna szinkronszínésze, Harada Sayaka (@sayakaharada) egy különleges üzenettel készült nektek~ A 3. évforduló közvetítés Augusztus 11. 5:00 magyar időszámítás szerint lesz YouTube-on!\n\n #AzurLane #Yostar #AzurLane3rdAnniv https://t.co/OceHuhlXHu')
        .setImage('https://images-ext-2.discordapp.net/external/snnaRZxqQW8DRQnpFDafaxoZmfeVZRh97hpwmMw1z5I/https/pbs.twimg.com/ext_tw_video_thumb/1424350466046005251/pu/img/AzC-Djtl9p8CrR9i.jpg?width=996&height=560')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}