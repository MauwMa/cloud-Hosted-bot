module.exports = {
    name: 'update2',
    description: 'update2',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle('❀Jet Ink, Silver Quills❀')
        .setURL('')
        .setTimestamp()
        .setDescription(`Boldog Új Évet, Parancsnok. Hogy megünnepeljük ezt a szezont, készítettem egy szabott ruhát magamnak, amely tradicionális Dargon Empery ruhákat használ alapnak. Nem nézek ki... gyerekesen, ugye?\n\nIJN Oite felkészül a bevetésre és hamarosan a dokkodat fogja díszíteni a közel jövőben, Parancsnok.`)        
        .setImage('https://images-ext-2.discordapp.net/external/DGO1tB8_74gDh1_yLnMXHoBKgMRcbKEu-VVy0LVA-L4/https/pbs.twimg.com/media/FJeA8NbakAEG1X1.jpg%3Alarge?width=1047&height=548')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update2);
        if (update2){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}