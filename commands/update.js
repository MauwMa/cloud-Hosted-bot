module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('★Utcán nevelkedett kisasszony★')
        .setURL('')
        .setTimestamp()
        .setDescription('Wóó, itt vagy! Szóval, milyen volt? Ezt a találkozóhelyet elég könnyű megtalálni, igaz? Nos, akkor induljunk meg neki!\n\nNamiko az új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')
        .setImage('https://images-ext-1.discordapp.net/external/a_eSSwdeIoVbH28y2rwGppe8vzc_AxDve3W5bhtScK8/https/pbs.twimg.com/media/FE3y8bFUUAkdB56.jpg%3Alarge?width=1239&height=551')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

 