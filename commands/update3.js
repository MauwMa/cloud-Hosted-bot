module.exports = {
    name: 'update3',
    description: 'update3',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('⚜Le Terrible⚜')
        .setURL('')
        .setTimestamp()
        .setDescription('Le Terrible vagyok, az elegáns nagy romboló, ki védi az Iris Libre tanítását. Az eszményeidet követve jöttem. Parancsnok, kérlek mutasd meg a harcolásod okát. \n\nFFNF Le Terrible felkészül a bevetésre és hamarosan a dokkodat fogja díszíteni a közel jövőben, Parancsnok.')
        .setImage('https://i.imgur.com/weJpk94.jpg')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update3);
        if (update3){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}