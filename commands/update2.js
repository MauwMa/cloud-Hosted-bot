module.exports = {
    name: 'update2',
    description: 'update2',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('♚A Dícső Tószt♚')
        .setURL('')
        .setDescription('Egészségedre, Parancsnok. Örülök, hogy a parti sikeres. Nos, nekem is vigyáznom kellene, hogy ne szennyezzem be a királyi család becsületét a cselekedeteimmel.\n\nHMS Exeter az új L2D ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')
        .setImage('https://images-ext-1.discordapp.net/external/kUwxsitp6_MLLkm9oOaZkN318zUCaTPrmfN7fZf2AmE/https/pbs.twimg.com/media/E_o8szYVUAEHQPC.jpg%3Alarge?width=1112&height=405')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update2);
        if (update2){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}