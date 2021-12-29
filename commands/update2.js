module.exports = {
    name: 'update2',
    description: 'update2',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('✠Rendbontó Cseléd✠')
        .setURL('')
        .setTimestamp()
        .setDescription(`*sóhaj* Tényleg zavarnod kell engem miközben szüneten vagyok? ...Csak viccelek, nem kell komolyan venned. Amúgy is kerestem valakit, akivel el tudom ütni az időt.\n\nKMS Ulrich von Hutten az új L2D ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.`)        
        .setImage('https://images-ext-1.discordapp.net/external/4rsIN3dug9klAAedNIm6LZfmfWESLIxeS9xegyAAeSk/https/pbs.twimg.com/media/FHsNHibVkAAiPs5.jpg%3Alarge')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update2);
        if (update2){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}