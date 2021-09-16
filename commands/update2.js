module.exports = {
    name: 'update2',
    description: 'update2',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('★Hold Fesztivál Űrséta★')
        .setURL('')
        .setDescription('Eldridge megérkezik a kijelölt magasságba... Hold, holdsütemény és Manjuuk észlelve...\n\nUSS Eldridge felkészül a bevetésre és hamarosan a dokkodat fogja díszíteni a közel jövőben, Parancsnok.')
        .setImage('https://images-ext-2.discordapp.net/external/Y7TZUMSU3mYFZ32qofkHqEq3mvfp4KiB_7wu9K3azS8/https/pbs.twimg.com/media/E_Vkm3gVQAc4H2N.jpg%3Alarge?width=1316&height=658')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update2);
        if (update2){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}