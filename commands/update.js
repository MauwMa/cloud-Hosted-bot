module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Megjegyzés')
        .setURL('')
        .setTimestamp()
        .setDescription('Parancsnokok, \n\n A Google Playen és App Sotreban új frissítés érhető el az Azur Lanehez. Ez NEM kötelező frissítés. Parancsnokok továbbra is játszani tudnak Azur Lane-nel a frissítés nélkül.')
        .setImage('https://images-ext-2.discordapp.net/external/n6_MI79_qjffCWW89SxEwts0gVkYwkMBbeXXtFd6-KI/https/pbs.twimg.com/media/FGLGWPQUYA4YsCK.jpg%3Alarge')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

 