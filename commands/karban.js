module.exports = {
    name: 'karban',
    permissions: ["KICK_MEMBERS"],
    description: 'karban',
    execute (client, message, args, Discord){
        const karban = new Discord.MessageEmbed()
        .setColor('#ffff00')
        .setTitle('Karbantartás!!')
        .setURL('')
        .setDescription('Parancsnokok, 12/09 Csütörtökön Magyar Időszámítás szerint \nreggel 08:00-kor lesz karbantartás. Kérjük a beosztásaitokat tervezzétek e szerint nyaaa~')
        .setImage('https://images-ext-2.discordapp.net/external/PGLOP1lyRoOuSu0_VOVLG4pDYnNQRtj_iBvYnSzdF30/https/pbs.twimg.com/media/FE21HPTVUAEzk36.jpg%3Alarge?width=965&height=551')
        .setTimestamp()
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(karban);
        if (karban){
            return message.channel.send(`Elküldtem a karbantartás értesítést nyaaa~`);
          }
    }    
}