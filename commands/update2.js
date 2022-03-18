module.exports = {
    name: 'update2',
    description: 'update2',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle('⛨Impero⛨')
        .setURL('')
        .setTimestamp()
        .setDescription(`Vittorio Veneto osztályú, Impero vagyok. Bemutatkozásnak vége - irány vissza aludni... Amúgy meg, briliáns vagyok. Szóval nem kell főnökösködni... Csak add meg a teremet és jóban leszünk. Éjszakát.\n\nRN Impero felkészül a bevetésre és hamarosan a dokkodat fogja díszíteni a közel jövőben, Parancsnok.`)        
        .setImage('https://images-ext-2.discordapp.net/external/nk8Jfd8_owHPnpyCs5vuyHX5TYewogDv-u1-PUv7tO0/https/pbs.twimg.com/media/FODXrdEaAAAPhlj.jpg?width=939&height=491')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update2);
        if (update2){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}