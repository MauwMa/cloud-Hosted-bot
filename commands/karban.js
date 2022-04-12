module.exports = {
    name: 'karban',
    permissions: ["KICK_MEMBERS"],
    description: 'karban',
    execute (client, message, args, Discord){
        const karban = new Discord.MessageEmbed()
        .setColor('#ffff00')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle('Karbantartás!!')
        .setURL('')
        .setDescription('Parancsnokok, 04/14 Csütörtökön Magyar Időszámítás szerint \nreggel 09:00-kor lesz karbantartás. Kérjük a beosztásaitokat tervezzétek e szerint nyaaa~')
        .setImage('https://images-ext-2.discordapp.net/external/5v50XmQ9nF9KyOXWmb0nOWfrE2ORMd0UFkonjtTr7Ec/https/pbs.twimg.com/media/FNQCnhJakAgtc2h.jpg?width=820&height=468')
        .setTimestamp()
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(karban);
        if (karban){
            return message.channel.send(`Elküldtem a karbantartás értesítést nyaaa~`);
          }
    }    
}