module.exports = {
    name: 'update3',
    description: 'update3',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('✠Utolsó Kör✠')
        .setURL('')
        .setTimestamp()
        .setDescription('Viel Glück~ Jó pillanatod van, Parancsnok? Csak hogy tudd az egyetlen személy akinek szurkolok... te vagy~\n\nKMS Prinz Eugen az új L2D ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')
        .setImage('https://images-ext-1.discordapp.net/external/tr7E9FPKdCJc9vOG1712RuGs4M6rdosWNTK1SwNifq8/https/pbs.twimg.com/media/FDgT-C6aAAAyVh7.jpg%3Alarge?width=1738&height=910')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update3);
        if (update3){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}