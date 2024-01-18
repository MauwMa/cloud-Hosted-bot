module.exports = {
    name: 'karban2',
    permissions: ["KICK_MEMBERS"],
    description: 'karban2',
    execute (client, message, args, Discord){
        const karban2 = new Discord.MessageEmbed()
        .setColor('#83ECE5')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle('Karbantartás!!')
        
        .setDescription('Parancsnokok, 12/14 Csütörtökön Magyar Időszámítás szerint \n 08:00-kor lesz karbantartás. Kérjük a beosztásaitokat tervezzétek e szerint nyaaa~')
        .setImage('https://images-ext-1.discordapp.net/external/5OIEKWq-sl_91QWWxJLAGrP-QGXBExpXY7-J-4chpO4/https/pbs.twimg.com/media/Fyu1iiyaAAASnVz.jpg')
        .setTimestamp()
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(karban2);
        if (karban2){
            return message.channel.send(`Elküldtem a karbantartás értesítést nyaaa~`);
          }
    }    
}