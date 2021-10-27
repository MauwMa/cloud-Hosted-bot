module.exports = {
    name: 'update3',
    description: 'update3',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('⚜Minden Hallowees este fekete macskája⚜')
        .setURL('')
        .setTimestamp()
        .setDescription('Ha figyelmen kívül hagysz, akkor használni fogom a fekete macska mágiámat és tökké változtatlak! Ez eléggé Halloweenes? Ahahaha! Csak hülyéskedem! Gyerünk, csináljunk valami mókást este, Parancsnok!\n\nMNF La Galissonnière az új L2D ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')
        .setImage('https://images-ext-1.discordapp.net/external/HcZcnBQMTF9fZd6roqnfyHlYbOYuYbrx9s8as5bACEg/https/pbs.twimg.com/media/FCs5mRBVEAAkE5_.jpg%3Alarge?width=1920&height=843')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update3);
        if (update3){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}