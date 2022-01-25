module.exports = {
    name: 'update2',
    description: 'update2',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle('★Messziről jövő Varázslónő★')
        .setURL('')
        .setTimestamp()
        .setDescription(`Úgy hallottam ezek a ruhák a Dargon Emperyből vannak, de egy kicsit... Öhmm, nem hogy nem tetszenek, csak a gondolat hogy ilyen ruhákban látsz egy kicsit zavarba ejtő... D-De nem mintha el kezdenék sírni...\n\nUSS Arizona új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.`)        
        .setImage('https://images-ext-2.discordapp.net/external/rHY6OH7Wy0pGAMLLh-hVdNttTl0Agzpvt3rAK6PjoXU/https/pbs.twimg.com/media/FJ8F9LhakAIYJK8.jpg%3Alarge?width=1274&height=676')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update2);
        if (update2){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}