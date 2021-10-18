module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('')
        .setURL('')
        .setTimestamp()
        .setDescription('Parancsnokok,\n\nA közelgő karbantartás után elérhető lesz a "Blueprint Completion Plan" Gascogne-re. Parancsnokok extra tervrajzokat gyűjthetnek minden kutatás után Gascogne-re. A maximum 30db-ot lehet szerezni az event alatt.')
        .setImage('https://images-ext-2.discordapp.net/external/ZNVRDtRhjV-V0BKD8-l6opP7sqn-rP-sEqAjBVKuaTA/https/pbs.twimg.com/media/FB-inKgVkAIv3Hw.jpg%3Alarge')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}