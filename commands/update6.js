module.exports = {
    name: 'update6',
    description: 'update6',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update6 = new Discord.MessageEmbed()
        .setColor('#DF794F')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle(`🎐Homura🎐`)
        
        .setDescription(`Homura vagyok. Homura's Krimzon Osztag vezetője. Meg fogom mutatni a krimzon erőmet!\n\nHomura felkészül a bevetésre és hamarosan a dokkodat fogja díszíteni a közel jövőben, Parancsnok.`)
        .setImage('https://images-ext-1.discordapp.net/external/bNFEfs6iXdJSXGeL0i6u3dpG6o_pWL3aHzIw0smsc1g/https/pbs.twimg.com/media/F_IGut_bcAA1QHe.jpg?width=1187&height=621')
        .setTimestamp()
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update6);
        if (update6){
            return message.channel.send(`Elküldtem az updatet nyaaa~ `);   
          }
    }
}



  