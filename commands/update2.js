module.exports = {
    name: 'update2',
    description: 'update2',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Tiszta Bolt, Tiszta Elme❀')
        .setURL('')
        .setTimestamp()
        .setDescription('Fuu, készis van a bejárat... Óh üdvözöllek, Parancsnok! Éppen takarítok, adj egy pillanatot... Azonnal ott leszek!\n\nIJN Choukai új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')        
        .setImage('https://images-ext-2.discordapp.net/external/UBwV5SW6iqqQjGS64gTWIbBfJBNS7PC5MUND9tAK2oI/https/pbs.twimg.com/media/FHXl-ELUYAAnwrm.jpg%3Alarge?width=1171&height=676')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update2);
        if (update2){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}