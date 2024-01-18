module.exports = {
    name: 'update4',
    description: 'update4',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update4 = new Discord.MessageEmbed()
        .setColor('#DF794F')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle(`★Laffey II★`)
        
        .setDescription(`Laffey készen, buzgó és motiváltabb mint valaha... A felszerelésem változott csak, én nem... Szóval ne fogd meg ezeket a füleket, Parancsnok. Azok nem igaziak...\n\nUSS Laffey II megszerezhető a "Light-Chasing Sea of Stars" eventen!`)
        .setImage('https://images-ext-2.discordapp.net/external/46tAIqXAnDFFL9AkOUFRGOR9H3XR8cim__IQiGh2WB0/https/pbs.twimg.com/media/GBYbPg3bsAANdQf.jpg?format=webp')
        .setTimestamp()
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update4);
        if (update4){
            return message.channel.send(`Elküldtem az updatet nyaaa~ `);   
          }
    }
}  