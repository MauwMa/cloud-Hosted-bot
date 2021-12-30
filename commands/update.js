module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle("Emlékeztető")
        .setURL('')
        .setTimestamp()
        .setDescription('Parancsnokok,\n\n Ez a nyolc limitált skinek, amelyek 3 napra tértek vissza 01/01 magyar időszámítás szerint 7:59-ig lesznek még elérhetőek. Ne hagyjátok ki az esélyt, hogy megszerezzétek őket~')
        .setImage('https://images-ext-2.discordapp.net/external/Ep-4ryedliH8Vcp2OrjyqioHbx5alaMbRCY9x5XY4uQ/https/pbs.twimg.com/media/FHybpNXVEAI_0US.jpg%3Alarge?width=1440&height=646')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

 