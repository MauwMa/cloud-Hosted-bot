module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('❀Lobogó Harsonaszó❀')
        .setURL('')
        .setDescription('Hello, Parancsnok. Ó, szerinted jól nézek ki ebben a lobogó ruhába~? Köszönöm szépen! \n\nIJN Michishio új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')
        .setImage('https://images-ext-2.discordapp.net/external/IRtUTL20V8ehmLpo2rCnHB7duWLsGDqTZfLoHlCzAeY/https/pbs.twimg.com/media/E_42SS9VcAAfeNY.jpg%3Alarge?width=1112&height=405')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}