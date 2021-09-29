module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('🔥Fusou META🔥')
        .setURL('')
        .setDescription('Csatahajó, Fusou vagyok. Békét hozok e föld meggyötört lelkeinek. Parancsnok, áldást keresel... vagy megváltást? \n\nFusou META hamarosan leszáll. Ingyenesen megszerezhető lesz Cruise Mission elvégzéséért.')
        .setImage('https://images-ext-1.discordapp.net/external/3XU1yofWf-g68uV_y9eU1exso9-qT17mIb9i8P9cRxw/https/pbs.twimg.com/media/FAdYtrqVEAAzqb0.jpg%3Alarge?width=1783&height=910')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}