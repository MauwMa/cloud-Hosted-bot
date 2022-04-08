module.exports = {
    name: 'update3',
    description: 'update3',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle('')
        .setURL('')
        .setTimestamp()
        .setDescription('Parancsnokok, \n\nHQ rengeteg visszajelzést kapott a frissítéssel kapcsolatban. HQ elnézéstkér a kényelmetlenségekért és 200 gemet küld kompenzációként.')
        .setImage('https://images-ext-1.discordapp.net/external/VHcXcfw_rr8ZjVtL3qSm-i9uH06vb3lWAVvHg9T3IAw/https/pbs.twimg.com/media/FP0tsamVUAU4Y3b.jpg?width=883&height=504')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update3);
        if (update3){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}