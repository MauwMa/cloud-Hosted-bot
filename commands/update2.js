module.exports = {
    name: 'update2',
    description: 'update2',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('★Cup Ramen Nagykövet?★')
        .setURL('')
        .setDescription('USS Saratoga új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')
        .setImage('https://images-ext-1.discordapp.net/external/tckH2NT_a2aLNM8fEZypClI-u5_ex1RvYntdhSeyz2Q/https/pbs.twimg.com/media/E-GfZBrUUAQBrvi.jpg%3Alarge?width=1240&height=676')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update2);
        if (update2){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}