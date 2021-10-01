module.exports = {
    name: 'update3',
    description: 'update3',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('❀Véletlen túlmelegedés?❀')
        .setURL('')
        .setTimestamp()
        .setDescription('Voah! ...Megint elestem... De legalább már hűvösebb van... Mi? Fotózás? Neeee, ne készíts rólam képet~\n\nIJN Isuzu felkészül a bevetésre és hamarosan a dokkodat fogja díszíteni a közel jövőben, Parancsnok.')
        .setImage('https://images-ext-1.discordapp.net/external/78JUTwcn42m2kZsOsl5aHIJcz6jx6XZUHoYwRg6juGc/https/pbs.twimg.com/media/E_Vk8W6VkAMC1r-.jpg%3Alarge?width=1232&height=672')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update3);
        if (update3){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}