module.exports = {
    name: 'update2',
    description: 'update2',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('【Call to Arms: Iron Blood】')
        .setURL('')
        .setTimestamp()
        .setDescription('Call to Arms: Iron Blood, egy előevent, a következő karbantartás után kerül be. Szerezz extra tapasztalatot Prinz Eugen, Peter Strasser, Tirpitz és U-47-el, hogy felkészülj a nagy eventre.')        
        .setImage('https://images-ext-2.discordapp.net/external/g4S-dj_1nVgxyeAqNJ7s7XyrXgZ87YnmvmGT2MhrGO4/https/pbs.twimg.com/media/FHILcCEVQAMtKaD.jpg%3Alarge')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update2);
        if (update2){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}