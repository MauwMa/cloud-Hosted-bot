module.exports = {
    name: 'update2',
    description: 'update2',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('❀Yamakaze❀')
        .setURL('')
        .setDescription('Roooooaar! Yamakaze a Shiratsuyu-osztályú romboló jelentkezik! ... Szóval, öhm, ezt a "Parancsnok" személyt keresem. Van ötleted arról, hogy merre lehet? ...Óh! Te vagy az?\n\nIJN Yamakaze felkészül a bevetésre és hamarosan a dokkodat fogja díszíteni a közel jövőben, Parancsnok.')
        .setImage('https://images-ext-1.discordapp.net/external/ngpUC-VHs3tbbDE2jpCbVATd29MX_6-guEBvKBcLQTo/https/pbs.twimg.com/media/E_Ph27sVUAYx5UF.jpg%3Alarge?width=1282&height=671')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update2);
        if (update2){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}