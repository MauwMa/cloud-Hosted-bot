module.exports = {
    name: 'update2',
    description: 'update2',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('')
        .setURL('')
        .setTimestamp()
        .setDescription('Parancsnokok, a Skybound Oratario event visszatért. Richelieu és Béarn egy kis látogatást tesz a könyvtárban. Szeretnél csatlakozni hozzájuk?')
        .setImage('https://images-ext-1.discordapp.net/external/nMliECKUwLYtIoLsgg3OwPdQB5lzrLarNKShhAng4Ow/https/pbs.twimg.com/media/FCyzNRMVQAI5Xjd.jpg%3Alarge?width=393&height=556')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update2);
        if (update2){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}