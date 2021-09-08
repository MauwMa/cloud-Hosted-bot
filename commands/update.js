module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('【Call to Arms: Sakura Empire】')
        .setURL('')
        .setDescription('Call to Arms: Sakura Empire, egy bevezető event, ami a következő karbantartás után lesz elérhető. Gyűjts extra tapasztalatot Nagato, Jintsuu, Inazuma or Ikazuchivel, hogy felkészülj a főeventre.')
        .setImage('https://images-ext-2.discordapp.net/external/M2xIu38oedDQOva5HEYVHekK8sjh8P14xejOhQcmpJQ/https/pbs.twimg.com/media/E-rg-CtVIAI07Cr.jpg%3Alarge')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}