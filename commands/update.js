module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('')
        .setURL('')
        .setDescription('Parancsnokok\n\n Egy kis előnézet Abercrombie Live2D Skinéhez\n\nA tartalom még fejlesztés alatt van, így nem reprezentálja a végleges verziót.')
        .setImage('https://images-ext-2.discordapp.net/external/mLLgKlvoEaa863SdMNXQhHQUbIf2wxLptPp63epu-AE/https/pbs.twimg.com/ext_tw_video_thumb/1427960191736107008/pu/img/UxbY2bcUDMIaJHNK.jpg')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}