module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('❀Két szerető regéje❀')
        .setURL('')
        .setDescription('Az új oath skin a következő karbantartás után elérhető lesz miután megesküszöl Noshiroval.')
        .setImage('https://images-ext-2.discordapp.net/external/WhWtx1y5eRNLwaPYNukoFalnjPnZOsxIVwGsMTipHJE/https/pbs.twimg.com/media/FADGIXdUcAY2QhD.jpg%3Alarge?width=794&height=458')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}