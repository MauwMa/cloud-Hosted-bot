module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('★Mujina★')
        .setURL('')
        .setTimestamp()
        .setDescription('Kaiju Eugenicist, Majiuna. Asszem csatahajó vagyok most. Csak kérdezem, hogy biztos legyen... Nincs a ti világotokba kaiju, igaz?\n\nMujina felkészül a bevetésre és hamarosan a dokkodat fogja díszíteni a közel jövőben, Parancsnok.')
        .setImage('https://images-ext-1.discordapp.net/external/fNS7hbpw_smqKEbRnTCd7L_1otcG267RBYhyZLpgU_c/https/pbs.twimg.com/media/FEt5I8uakAAgu7_.jpg%3Alarge?width=1101&height=551')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

