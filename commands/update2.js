module.exports = {
    name: 'update2',
    description: 'update2',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('✠Cseléd csak Meked✠')
        .setURL('')
        .setTimestamp()
        .setDescription(`Üdvözöllek! Ó, Hello, Parancsnok! Heheh, szóval hogyan tetszik a cseléd ruha? Szépen néz ki, ha negem kérdezel!\n\nKMS U-1206 új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.`)        
        .setImage('https://images-ext-2.discordapp.net/external/rykxunDNWiD3B3pvGlqaMcoGAJZGDfjTWmpLFlxpiW0/https/pbs.twimg.com/media/FHhJIfAVEAAXXMm.jpg%3Alarge')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update2);
        if (update2){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}