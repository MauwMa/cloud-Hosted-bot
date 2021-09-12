module.exports = {
    name: 'update2',
    description: 'update2',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('❀Shimakaze❀')
        .setURL('')
        .setDescription('IJN Shimakaze felkészül a bevetésre és hamarosan a dokkodat fogja díszíteni a közel jövőben, Parancsnok.')
        .setImage('https://images-ext-2.discordapp.net/external/j5S5EEzezLyb1ioAic7dgnz4y978RriAzm66dSdDLhY/https/pbs.twimg.com/media/E_Fe6buVQAcf_TC.jpg%3Alarge?width=1282&height=671')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update2);
        if (update2){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}