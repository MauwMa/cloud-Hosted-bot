module.exports = {
    name: 'update5',
    description: 'update5',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update5 = new Discord.MessageEmbed()
        .setColor('#DF794F')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle('🎐Ikaruga🎐')
         
        .setDescription('Ikaruga vagyok, harmadikos diáák a Hanzō National Akadémián, shinobi osztály képviselőjéként szolgálva.\n\nIkaruga felkészül a bevetésre és hamarosan a dokkodat fogja díszíteni a közel jövőben, Parancsnok.')
        .setImage('https://images-ext-1.discordapp.net/external/bj56cKMSJNjtJZWNrnontND9ujB9qsHFjyZr3CCVcYE/https/pbs.twimg.com/media/F_IGf31aQAADkNr.jpg?width=1187&height=621')
        .setTimestamp()
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update5);
        if (update5){
            return message.channel.send(`Elküldtem az updatet nyaaa~ `);   
          }
    }
}
