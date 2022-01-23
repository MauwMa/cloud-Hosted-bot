module.exports = {
    name: 'update2',
    description: 'update2',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle('★Az Alapkő Hadvezér★')
        .setURL('')
        .setTimestamp()
        .setDescription(`Állj meg! Ki vagy te?! ...Óh, te vagy az, Parancsnok. Összetévesztettelek egy kémmel. Miért vagy itt? Vagy szemlélni? Vagy ne adj isten, információt gyűjtesz a seregemről? \n\nUSS Pennsylvania új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.`)        
        .setImage('https://images-ext-1.discordapp.net/external/eKZ6FNPCwm65qcYWFPEAYsan4nWXxaai8sHvnXYbC1M/https/pbs.twimg.com/media/FJsVebDUYAIhBKI.jpg%3Alarge?width=1274&height=676')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update2);
        if (update2){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}