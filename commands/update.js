module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('♚Addled kísérő ♚')
        .setURL('')
        .setDescription('Óh... Üdvözöllek, Parancsnok. Felvehetem a rendelésed...? Vagy talán csak hátra akarsz dőlni és pihenni? ...Bárhogy is legyen felőlem okés.\n\nHMS Black Prince új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')
        .setImage('https://images-ext-1.discordapp.net/external/50FuYdCPouvOwPIHuufMUvI05rrzXdHEijjgWELKzqA/https/pbs.twimg.com/media/E_UwxFzVIAEZRjH.jpg%3Alarge?width=1232&height=672')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}