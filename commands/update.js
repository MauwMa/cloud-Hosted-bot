module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('【Crimson Echoes】')
        .setURL('')
        .setTimestamp()
        .setDescription('A Crimson Echoes event véglegesen bekerül a War Archives-ba a következő karbantartás után.')
        .setImage('https://images-ext-2.discordapp.net/external/WXHBPYtXZnsfA8LhcpEGV5CsNgb0uUW6mUeXNFeon5Q/https/pbs.twimg.com/media/FBPqm5lVcAAcjwW.png%3Alarge')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}