module.exports = {
    name: 'update3',
    description: 'update3',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('')
        .setURL('')
        .setDescription('Limitált bútorzatok amelyek 5/27 előtt, kivéve a kolab szettek és új szettek amelyek 5/27 után voltak elérhetők, limitált ideig újra elérhetőek lesznek.')
        .setImage('https://images-ext-1.discordapp.net/external/qL3049K9Xw_LnUzexVXgCxrIdAYWqmalgiRp9eCi8C8/https/pbs.twimg.com/media/E8_1z93XMBEX70_.png%3Alarge')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update3);
        if (update3){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}