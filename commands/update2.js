module.exports = {
    name: 'update2',
    description: 'update2',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('')
        .setURL('')
        .setDescription('Az új zeneszám Takuya Ohata készítésével "Standing By You" elérhető mindenhol! Nagy köszönet Naganawa Maria, Fuchigami Mai, Abe Rika és Kakuma Ainak az előadásáért.\n\nNézzétek meg: https://t.co/l0F7Q1iKK8')
        .setImage('https://images-ext-1.discordapp.net/external/qUMcXbZmEYQX242bYBu8l__OOgBjkdBXksCAuL-KEzw/https/pbs.twimg.com/media/E8gxpsmVkAsNdDq.jpg%3Alarge?width=676&height=676')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update2);
        if (update2){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}