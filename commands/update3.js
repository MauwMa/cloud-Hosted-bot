module.exports = {
    name: 'update3',
    description: 'update3',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('✠Ulrich von Hutten✠')
        .setURL('')
        .setTimestamp()
        .setDescription('KMS Ulrich von Hutten felkészül a bevetésre és hamarosan a dokkodat fogja díszíteni a közel jövőben, Parancsnok.')
        .setImage('https://images-ext-1.discordapp.net/external/Y_stpBTgjs_VhrLBGWqjicIGarfb_eo5Clj6PfZSvpg/https/pbs.twimg.com/media/FHITrzEUUAcE5IQ.jpg%3Alarge?width=1047&height=548')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update3);
        if (update3){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}