module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Rajzverseny')
        .setURL('')
        .setDescription('Parancsnokok,\n\n A Szavazási Idő a 3. Évforduló rajzversenyére megkezdődött! Látogass el ide: https://t.co/giJxRPcKm2 hogy voksolj a kedvenc rajzodra!')
        .setImage('https://images-ext-1.discordapp.net/external/NDWrmQ_HlA3_Z2NR4_4oDx53h0kF2UuW52712l1tNqA/https/pbs.twimg.com/media/E6-wJJWVgAMmtGi.jpg%3Alarge?width=567&height=567')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}