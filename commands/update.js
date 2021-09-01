module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('')
        .setURL('')
        .setDescription('Szeptemberi Becsekkoló bútorzat: Ugráló labda')
        .setImage('https://images-ext-2.discordapp.net/external/PJ_7GpBHTYK8UQ1tv6VFh2q8luvemBomfW-87J5jhK0/https/pbs.twimg.com/media/E-Ggci2VIAY2Ahz.jpg%3Alarge?width=1440&height=655')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}