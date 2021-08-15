module.exports = {
    name: 'update3',
    description: 'update3',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('★Nautilus★')
        .setURL('')
        .setDescription('USS Nautilus felkészül a bevetésre és hamarosan a dokkodat fogja díszíteni a közel jövőben, Parancsnok.')
        .setImage('https://images-ext-1.discordapp.net/external/IIQt67yu_ztR5XmAuMpPhmt2ZdxOlWhzDigK-gPVX_Q/https/pbs.twimg.com/media/E8vFh3sVIAM2ahX.jpg%3Alarge?width=1291&height=676')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update3);
        if (update3){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}