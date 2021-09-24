module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('❀Csábítás a tengeri szellőben❀')
        .setURL('')
        .setDescription('Az új oath skin a következő karbantartás után elérhető lesz miután megesküszöl Tauhouval.')
        .setImage('https://images-ext-1.discordapp.net/external/e4U9NgVfJ7Y_om9W3F4Ul9dtAtAy2BKm5sTGBxJRzn8/https/pbs.twimg.com/media/FADei3aUcAINqIh.jpg%3Alarge')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}