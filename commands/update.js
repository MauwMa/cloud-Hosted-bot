module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('❀A Világ Leggyorsabb Nyuszi Pincér❀')
        .setURL('')
        .setDescription('Ugri bugri! Fogj egy poharat és kortyincs! Huuu, ebbe a ruhába elég trükkösen kellett belebújnom. De azt kell mondjam remek választás volt, Parancsnok!\n\nIJN Shimakaze az új L2D ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')
        .setImage('https://images-ext-1.discordapp.net/external/ZLpEl66Hs8OmEmVwKYE9oU2nXachnI4_t3hiuM51sWM/https/pbs.twimg.com/media/E_VkZplVgAYSxWj.jpg%3Alarge?width=1232&height=672')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}