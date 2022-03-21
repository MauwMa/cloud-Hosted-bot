module.exports = {
    name: 'update3',
    description: 'update3',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle('⛨Virtuális Torony⛨ ')
        .setURL('')
        .setTimestamp()
        .setDescription('Az új Sardegna Empire event, Virtuális Torony, Március 24.-én kezdődik. Ez az event Impero karatkert és még megannyit fog bemutatni.')
        .setImage('https://images-ext-1.discordapp.net/external/XzN1YDWAvlXUrZn9TgY9rXiNI_nZBiqtlAJiriqpAak/https/pbs.twimg.com/media/FOYe6GOVgAE4QAi.jpg?width=981&height=491')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update3);
        if (update3){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}