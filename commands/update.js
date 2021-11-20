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
        .setDescription('Parancsnokok\n\n Ezek a limitált skinek visszatértek a Black Friday alkalmából és Akashi Fire Sale eventért. Magyar időszámítás szerint 12/2 07:59-ig lesznek elérhetőek.')
        .setImage('https://images-ext-1.discordapp.net/external/1ufLEe_c7ckMtC_0o1ZYBtf34LeUo6U1A9ewsX_ggP8/https/pbs.twimg.com/media/FEjt4KcUcAUWotE.jpg%3Alarge?width=1125&height=554')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

