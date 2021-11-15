module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('★Black Friday Lucky Music Box★')
        .setURL('')
        .setTimestamp()
        .setDescription('A Black Friday megünneplésképp, HQ egy különleges limitált Szerencsés Zenedobozzal készült. Ez az exkluzív zsákbamacska garantáltan ad L2D skint és 35<:Kocka:790201634100740117> és megannyi más cuccot.')
        .setImage('https://images-ext-2.discordapp.net/external/sg0MH6EyQZm5YbNr_wSgGMMnvSIz-IPRi-DP3wPF214/https/pbs.twimg.com/media/FEOi5pKVIAIGDXQ.jpg%3Alarge?width=1425&height=676')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

