module.exports = {
    name: 'update3',
    description: 'update3',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle('【Counterattack Within the Fjord Rerun】')
        .setURL('')
        .setTimestamp()
        .setDescription('Counterattack Within the Fjord event vissza fog térni a következő karbantartás után.')
        .setImage('https://images-ext-2.discordapp.net/external/zvHdnp7R7jZ85SN7q31MaLIB-l74Ss7HJa2wsOSyXe4/https/pbs.twimg.com/media/FNA7x3BXwAQoKie.png')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update3);
        if (update3){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}