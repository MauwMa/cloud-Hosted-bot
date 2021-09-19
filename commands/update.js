module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('')
        .setURL('')
        .setDescription('Parancsnokok,\n\nA Manjuu Nyári Fesztivál bútorzatok elérhetőek egészen 10/3 08:59-ig. Ragadjátok meg ezt a bútorzat szettet, hogy megtapasztáljátok a csodálatos fesztivált.')
        .setImage('https://images-ext-2.discordapp.net/external/86RsHwwK_BmI5XAdF1MmhxdnbUfaNIG_5leUmRrHxRY/https/pbs.twimg.com/media/E_o70MyVEAEY9rN.jpg%3Alarge?width=948&height=602')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}