module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Értesítés')
        .setURL('')
        .setDescription('A szerver sürgős karbantartáson megy keresztül. Jelenleg hiba van a battle passben. A főhadiszállás már rajta van az ügyön, köszönjük a türelmeteket. Bármilyen változás meg lesz azonnal osztva.')
        .setImage('https://images-ext-2.discordapp.net/external/bUVyOEBfuhLKGs8Br8iRSox0AeFjq6GmjQfnFglihKM/https/pbs.twimg.com/media/FAmPSamVQAM1D21.png%3Alarge')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}