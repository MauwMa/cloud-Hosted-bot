module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('【The Flame-Touched Dagger】')
        .setURL('')
        .setTimestamp()
        .setDescription('Parancsnokok,\n\nEzek a limitált skinek 11/25 magyar időszámítás szerint 07:59-ig elérhetőek. Ne hadjátok ki a lehetőséget, hogy megszerezzétek!')
        .setImage('https://images-ext-1.discordapp.net/external/PewGqojlZtxSD3zF9gVtv0aMjjmeew9iLbGwMszUImw/https/pbs.twimg.com/media/FD_ZKzcVIA00KXi.jpg%3Alarge?width=1125&height=554')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

