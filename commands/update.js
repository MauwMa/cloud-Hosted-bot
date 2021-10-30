module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('')
        .setURL('')
        .setTimestamp()
        .setDescription('Parancsnokok\n\n A Skybound Oratorio Rerun event jelenleg megy! Ezek a karakterek limitált ideig elérhetőek az event épításben 11/11 magyar időszámítás szerint 08:00-ig.')
        .setImage('https://images-ext-2.discordapp.net/external/B62dGF3ALTGelNJJEPxmVrAjvIN6Io-luNWrZW9vadI/https/pbs.twimg.com/media/FC3WNkAVcAE6V-b.jpg%3Alarge')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}