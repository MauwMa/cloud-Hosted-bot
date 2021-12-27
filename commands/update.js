module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle("✠Cica Kávézó Kitakarítása✠")
        .setURL('')
        .setTimestamp()
        .setDescription("Te kis...! Nézd milyen rumlit csináltál! És én vagyok az, akinek fel kell takarítania! ...Óh. Tökéletes időzítés, Parancsnok. Tudnák használni egy segítőkezet a padlóhoz, azután amit ez a kis szar csinált.\n\nKMS Magdeburg új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.")
        .setImage('https://images-ext-2.discordapp.net/external/Bj_F-RtYO0GiYIf4vAbV3AMbQsa1bzASMYoS967zZOo/https/pbs.twimg.com/media/FHhIZ8jUcAMPM83.jpg%3Alarge?width=950&height=548')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

 