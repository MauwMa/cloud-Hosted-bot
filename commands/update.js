module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle("❀Firecrackers and Steamed Buns❀")
        .setURL('')
        .setTimestamp()
        .setDescription('A nevem Bristol, Eagle Union romboló! Üdvözletem, Parancsnok! Ez a kikötő rengeteg rejtélynek add otthont... A feladatommá teszem mindegyiknek megoldását! Heheheheh!\n\nUSS Bristol a bevetésre és hamarosan a dokkodat fogja díszíteni a közel jövőben, Parancsnok')
        .setImage('https://images-ext-2.discordapp.net/external/IePJNi5c6g7eZaZyfgh6OZ2hqAZnA6bgkeXGEMzTHN0/https/pbs.twimg.com/media/FJimDXEaUAIEExn.jpg%3Alarge?width=1291&height=676')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

 