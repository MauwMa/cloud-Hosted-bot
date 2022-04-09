module.exports = {
    name: 'update3',
    description: 'update3',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle('')
        .setURL('')
        .setTimestamp()
        .setDescription('Parancsnokok,\n\nEzek a karakterek az új kinézetükbe öltöztek és felkészültek az új tevékenységekre~ Ezek a kinézetek véglegesen elérhetőek lesznek .')
        .setImage('https://images-ext-2.discordapp.net/external/Vg05fKX03TSgZpuOxWeYLE7G3BOqlKkcCcUwXRZ9lJc/https/pbs.twimg.com/media/FP091nPVsAI_fX0.jpg?width=1022&height=503')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update3);
        if (update3){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}