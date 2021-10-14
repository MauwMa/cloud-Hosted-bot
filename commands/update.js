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
        .setDescription('Parancsnokok, a Crimson Echoes event mostmár elérhető a War Archivesban, Amagi és Tosa várják a megérkezésedet~')
        .setImage('https://images-ext-2.discordapp.net/external/Mf_vF4JOluP4hz1WFrx3YB4cFmHmd0amqpy3dwbb1mU/https/pbs.twimg.com/media/FBrE9RWVIAAuDuA.jpg%3Alarge?width=1202&height=676')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}