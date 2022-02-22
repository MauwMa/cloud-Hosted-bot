module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle("☭Arkhangelsk☭")
        .setURL('')
        .setTimestamp()
        .setDescription('Csatahajó Arkhangelsk vagyok. Hehe, szókimondóan beszélni velem pont az, amit szeretek. Látok egy kis potenciát benned.\n\nSN Arkhangelsk felkészül a bevetésre és hamarosan a dokkodat fogja díszíteni a közel jövőben, Parancsnok.')
        .setImage('https://images-ext-2.discordapp.net/external/zOAeFlT7go9gi2MbL59mmCD1vPVyFsb1VVeAe3l6sak/https/pbs.twimg.com/media/FMHRPGHVgAMAY2t.jpg')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

 