module.exports = {
    name: 'update3',
    description: 'update3',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle('⚓Chang Chun (Retrofit)⚓')
        .setURL('')
        .setTimestamp()
        .setDescription('Készen is van a retrofitelés~ Itt az idő tesztelni az új játékszereimet... Öööhm, úgy értem, hogy itt az idő tesztelni az új felszerelésem tűzerejét! Óh, vigyázz a fejedre, Parancsnok! Nem szeretnéd, ha az egyik rakétám rád célozna.\n\nJelenleg Chang Chun a kikötőben van fejlesztés miatt. Hamarosan vízre lesz bocsájtva.')
        .setImage('https://images-ext-2.discordapp.net/external/39OYQbUiQoGRmnwCnTbUCvXLMAVtg_i8TlGGu8f2HCU/https/pbs.twimg.com/media/FJ2mTz4aAAEWmfx.jpg%3Alarge?width=405&height=676')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update3);
        if (update3){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}