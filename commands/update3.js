module.exports = {
    name: 'update3',
    description: 'update3',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Munka Utáni Szolgáltatás✠')
        .setURL('')
        .setTimestamp()
        .setDescription('Zzz... Huh? Elszundítottam volna? Csak pár másodpercig akartam pihentetni a szememet, de mennyi ideig aludtam... Várj egy kicsit, miért vagy még mindig itt, Parancsnok?\n\nKMS Prinz Adalbert az új L2D ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')
        .setImage('https://images-ext-2.discordapp.net/external/PXILhr7SbV2Kqhw6LIfKyqd331I15oYk1S9sasQDfJM/https/pbs.twimg.com/media/FHsOjf_VgAU482r.jpg%3Alarge')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update3);
        if (update3){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}