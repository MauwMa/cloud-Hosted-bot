module.exports = {
    name: 'update4',
    description: 'update4',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update4 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle(`【Manjuu Torony Rerun】`)
        
        .setDescription(`A Manjuu Torony mini-game visszatér a következő karbantartás után. A mini-game hétszeri elvégzésével limitált karakterre Uranamira tehettek szert.`)
        .setImage('https://images-ext-1.discordapp.net/external/8dwmPw-k5s-pCeo9GcTcbNgZyfrT-_bGJBNIqmyvTcM/https/pbs.twimg.com/media/FmBg7jWaYAEKPds.jpg')
        .setTimestamp()
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update4);
        if (update4){
            return message.channel.send(`Elküldtem az updatet nyaaa~ `);   
          }
    }
}  