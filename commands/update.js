module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle("【Világ a Festményen Belül】")
        .setURL('')
        .setTimestamp()
        .setDescription('Parancsnokok, elvégeztétek az eventet és köszöntöttétek Hai Chit és Hai Tient a kikötőtökben? Az event magyar időszámítás szerint Február 10.-én 08:00-kor ér véget.')
        .setImage('https://images-ext-1.discordapp.net/external/acdyw1JRxPYDptxKZ_VUwv7GzhCX-Jxo6DkFZVx_0Qw/https/pbs.twimg.com/media/FKf7diqVcAA2ChH.jpg%3Alarge')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

 