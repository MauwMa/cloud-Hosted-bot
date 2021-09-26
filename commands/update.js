module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Emlékeztető')
        .setURL('')
        .setDescription('Parancsnokok,\n\nAz új party skinek Cheshire, Aquila, Exter és a többiekre megérkeztek. Magyar időszámítás szerint 10/14 8:59-ig lesznek elérhetőek.')
        .setImage('https://images-ext-2.discordapp.net/external/C13il1qV18vNQ2Sye_kdx6iOt7QBDdCrrP_DplmyE-c/https/pbs.twimg.com/media/FAImivhXIAEwSMu.jpg%3Alarge?width=1920&height=862')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}