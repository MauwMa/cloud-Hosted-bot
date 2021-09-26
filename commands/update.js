module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Értesítés')
        .setURL('')
        .setDescription('A karbantartás után a Daily Raidekhez egy új nehézségi szint fog bemutatkozni. A "Supply Line Disruption" heti 2-re lesz lelimitálva. Javasolt hogy az új nehézségi szintre várjatok, amíg elérhető lesz a karbantartás után mielőtt kipróbálnátok.')
        .setImage('https://images-ext-1.discordapp.net/external/6NG1wllz0P09O2FGV---ETCaVEwKDk9zrJNl81llHs0/https/pbs.twimg.com/media/FAM5SPDVkAUE7lX.jpg%3Alarge')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}