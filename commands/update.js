module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('')
        .setURL('')
        .setDescription('Parancsnokok,\n\nAbercrombie, Ingraham és Nautilus az új nyuszi kinézetükkel csatlakoztak hozzánk. Szeptember 2. 9:00 óráig lesznek elérhetőek!')
        .setImage('https://images-ext-2.discordapp.net/external/Eob_7Bq1uW-QZo7nlpXYU9DBzMeXwElWdaxzIqWoPi0/https/pbs.twimg.com/media/E9KNudSUYAoWZXF.jpg%3Alarge?width=1373&height=676')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}