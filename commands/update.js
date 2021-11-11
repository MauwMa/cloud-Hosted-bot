module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('【The Flame-Touched Dagger】')
        .setURL('')
        .setTimestamp()
        .setDescription('A Lángérintett Tőr event elkezdődött és 11/25 magyar időszámítás szerint 7:59-ig lesz elérhető. Az új karakter, Foch, mérföldkő jutalomként vagy heavy építésből lehet megszerezni limitált ideig.')
        .setImage('https://images-ext-2.discordapp.net/external/0SlPHF5ONk6QRN77eDrZj6z0q2ijpRFQrESJSq1ALjw/https/pbs.twimg.com/media/FD63kFSUcAYj3yt.png%3Alarge')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

