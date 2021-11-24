module.exports = {
    name: 'update2',
    description: 'update2',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('★Együtt, Keresztül úszás az égen★')
        .setURL('')
        .setTimestamp()
        .setDescription('Wóóó, kibújik a nap! Olyan jó érzés kint lenni az esőzés után... Ó, Parancsnok! Tegyünk együtt egy sétát az égen keresztül!\n\nChise Asukagawa az új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')        
        .setImage('https://images-ext-2.discordapp.net/external/aRgxKG0a-6vFQpEhaPYlPVdvj1p_cyYg53fV9_SCLu4/https/pbs.twimg.com/media/FE3z8ypVQAIC8OM.jpg%3Alarge?width=1239&height=551')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update2);
        if (update2){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}