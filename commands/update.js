module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle("☭A Driftelő Igazság☭")
        .setURL('')
        .setTimestamp()
        .setDescription('Állj meg! Nincs merre menekülnöd! ...Szép munka, Elvtárs Parancsnok, milyen izgalmas üldözésben volt részünk! Mi, úgy gondolod hogy hozzám illik ez a munka? Csak ugratsz engem, bahaha! \n\nSN kirov L2D új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')
        .setImage('https://images-ext-2.discordapp.net/external/pMeqoTPtQPJvcwDi4obIYHeSlBjhqcLs7_uw3leJDiw/https/pbs.twimg.com/media/FMR7ujMVcAANXEp.jpg?width=881&height=468')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

 