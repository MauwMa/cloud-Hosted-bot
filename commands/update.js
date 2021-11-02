module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Bútorzat')
        .setURL('')
        .setTimestamp()
        .setDescription('Novemberi bejelentkezős Bútorzat: Időjárás Projektor (Winter)')
        .setImage('https://images-ext-2.discordapp.net/external/ytJ5Nj7edJadW8O_IJD2j8Y0nSYUT2wsoG6QBy-xKZ4/https/pbs.twimg.com/media/FDLhjvHUYAUcOZx.jpg%3Alarge?width=1224&height=556')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}