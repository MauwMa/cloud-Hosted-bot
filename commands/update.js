module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle("☭Kronshtadt☭")
        .setURL('')
        .setTimestamp()
        .setDescription('Kronshtadt vagyok a Northern Parliament cirkálója. Nem a tűzerőm az egyetlen érdemem - sokkal többem van annál. Biztos vagyok benne, hogy kideríted magadnak miközben az ellenséggel összeütközünk, Elvtárs.\n\nSN Kronshtadt felkészül a bevetésre és hamarosan a dokkodat fogja díszíteni a közel jövőben, Parancsnok.')
        .setImage('https://images-ext-1.discordapp.net/external/GPyJsnsyj8q6krqSow-f41B8ozGPOxOiPDBdjiq-e0M/https/pbs.twimg.com/media/FL4EKsPUUAAg_PJ.jpg')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

 