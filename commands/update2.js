module.exports = {
    name: 'update2',
    description: 'update2',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('★Chise Asukagawa★')
        .setURL('')
        .setTimestamp()
        .setDescription('Hééééé, valahogy egy teljesen ismeretlen helyre lyukadtam ki... Óh, öhm, Chise Asukagawa a nevem! Mivel egy ideig biztos itt leszek, legyunk jóban!\n\nChise Asukagawa felkészül a bevetésre és hamarosan a dokkodat fogja díszíteni a közel jövőben, Parancsnok.')        
        .setImage('https://images-ext-1.discordapp.net/external/QtqgzSfhctn3J216QPFdxVn0MbSQ_HplE8P0VXv2WiQ/https/pbs.twimg.com/media/FEt29cFagAEfUFh.jpg%3Alarge?width=1101&height=551')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update2);
        if (update2){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}