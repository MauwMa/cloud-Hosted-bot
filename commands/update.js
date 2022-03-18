module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle("❀Egészséges Adag Napfényből!❀")
        .setURL('')
        .setTimestamp()
        .setDescription('Hmmgh! Ó igen...  Áh, itt vagy te is, Parancsnok! Akarsz csatlakozni hozzám? Gyere élvezni a délutáni napsütést, olyan jó érzés!\n\nIJN Wakaba az új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')
        .setImage('https://images-ext-2.discordapp.net/external/t9JHrxgw_nEyILTQASSA13SMFNsoftv8shN29XJ58Jc/https/pbs.twimg.com/media/FN8-mvcagAIJgBg.jpg?width=914&height=491')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

 