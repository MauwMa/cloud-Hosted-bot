module.exports = {
    name: 'update2',
    description: 'update2',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('★Ingraham★')
        .setURL('')
        .setDescription('USS Ingraham felkészül a bevetésre és hamarosan a dokkodat fogja díszíteni a közel jövőben, Parancsnok.')
        .setImage('https://images-ext-1.discordapp.net/external/oJkIDwRuhAcAb7HGPKTA7SP91MKZBkMbjorDUuc0Wk4/https/pbs.twimg.com/media/E8qwulLVgAYwvFm.jpg%3Alarge?width=1291&height=676')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update2);
        if (update2){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}