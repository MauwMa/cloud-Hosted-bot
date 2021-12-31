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
        .setDescription('Parancsnokok,\n\n A Tower of Transcendence event jelenleg megy! Ezek a limitált karakterek az event építésből elérhetőek egészen 1/13/2022 magyar időszámítás szerint 7:59-ig.')
        .setImage('https://images-ext-1.discordapp.net/external/H7kTB9nyHgQK6NPCCTH3iw2kNdDom3bQCid8nzxMs8I/https/pbs.twimg.com/media/FH2X238VUAE4jgM.jpg%3Alarge?width=1069&height=548')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

 