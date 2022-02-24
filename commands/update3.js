module.exports = {
    name: 'update3',
    description: 'update3',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle('')
        .setURL('')
        .setTimestamp()
        .setDescription('Parancsnok, az Abyssal Refrain event elkezdődött! Kronshtadt és a többi Northern Parliament tagok összegyűltek, hogy megvizsgálják a Szirén technológia rejtélyét.')
        .setImage('https://images-ext-1.discordapp.net/external/yHEuGXgOZW0YeDtzXVcGeT2ObjcuP-l7NaBUiUpCHHQ/https/pbs.twimg.com/media/FMYGZ3ZVIAcGekP.jpg?width=1170&height=658')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update3);
        if (update3){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}