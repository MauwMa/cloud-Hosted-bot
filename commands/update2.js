module.exports = {
    name: 'update2',
    description: 'update2',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle(`☭Nyuszi a Banyában☭`)
        
        .setDescription(`Uughh... Oohh... Królik elolvad... Kezdek szédülni... Parancsnok Elvtárs, hozz nekem jeget...\n\nSN Grozny az új L2D kinézetébe öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.`)
        .setImage('https://images-ext-2.discordapp.net/external/0XLLNNFt4Qbi74ziMcXf0wt4Kbvv5D0g1Icf4f71jXw/https/pbs.twimg.com/media/Fr0YVKVaAAYAmt5.jpg?width=1196&height=592')
        .setTimestamp()
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update2);
        if (update2){
            return message.channel.send(`Elküldtem az updatet nyaaa~ `);   
          }
    }
}  
    //    .setDescription(`\n\nFFNF L'Indomptable az új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.`)
