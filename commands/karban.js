module.exports = {
    name: 'karban',
    permissions: ["KICK_MEMBERS"],
    description: 'karban',
    execute (client, message, args, Discord){
        const karban = new Discord.MessageEmbed()
        .setColor('#ffff00')
        .setTitle('Karbantartás!!')
        .setURL('')
        .setDescription('Parancsnokok, 10/21 Csütörtökön Magyar Időszámítás szerint \nreggel 09:00-kor lesz karbantartás. Kérjük a beosztásaitokat tervezzétek e szerint nyaaa~')
        .setImage('https://i.imgur.com/0BEHNji.png')
        .setTimestamp()
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(karban);
        if (karban){
            return message.channel.send(`Elküldtem a karbantartás értesítést nyaaa~`);
          }
    }    
}