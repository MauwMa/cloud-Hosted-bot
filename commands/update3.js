module.exports = {
    name: 'update3',
    description: 'update3',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Poha és Bolyhos Terápia')
        .setURL('')
        .setDescription('Mi a gond, Parancsnok? Ó, ez az öltözék? ...Öhm, úgy hallottam, hogy ez a ruha terapeutás előnyöket hoz és reméltem, hogy kipróbálhatom...M-Mit gondolsz? Terapeutásan érződik számodra?\n\nIJN Umikaze felkészül a bevetésre és hamarosan a dokkodat fogja díszíteni a közel jövőben, Parancsnok.')
        .setImage('https://images-ext-1.discordapp.net/external/fMZtL9TYXnJmHV1__1QP4-46n3Bdg6KFP8_q_rgtoBQ/https/pbs.twimg.com/media/E_PjXsdWUAQ6m3J.jpg%3Alarge?width=1232&height=672')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update3);
        if (update3){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}