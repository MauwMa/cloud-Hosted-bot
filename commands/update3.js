module.exports = {
    name: 'update3',
    description: 'update3',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('★A Kék Ég Állomás★')
        .setURL('')
        .setTimestamp()
        .setDescription('A vonat még mindig nem ért ide? ...Oh, milyen véletlen hogy itt látlak, Parancsnok. Hova indultál?\n\nRikka Takarada az új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')
        .setImage('https://images-ext-1.discordapp.net/external/-xw4uTGRAKbZXOTR0e302D5dnFqYQAQI1GVtChnXWpA/https/pbs.twimg.com/media/FE9mrw4UYAgSpqT.jpg%3Alarge?width=1239&height=551')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update3);
        if (update3){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}