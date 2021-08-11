module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('★A Szív Vágya★')
        .setURL('')
        .setDescription('USS North Carolina az új L2D ruhájába öltözik. A közeljövőben a dokkodban fog  várni, Parancsnok.')
        .setImage('https://images-ext-1.discordapp.net/external/iLXz412Dm02eaXpEprZ1178mm0Q5tICmeu09b0GEjbU/https/pbs.twimg.com/media/E8erdWnVIAAsDYy.jpg%3Alarge')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}