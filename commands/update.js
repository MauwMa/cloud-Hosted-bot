module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle("【Tüzijáték műhely】")
        .setURL('')
        .setTimestamp()
        .setDescription('Parancsnokok, már elvégeztétek a Fireworks Workshop mini-eventet és Z28-at köszöntöttétek a kikötőtökben? Ez a mini-event Január 13. magyar időszámítás szerint 07:59-ig lesz még elérhető.')
        .setImage('https://images-ext-1.discordapp.net/external/W-_B-rNTeCSU8rfcJl-fz4VFBsP61GA1p2jbr925ed8/https/pbs.twimg.com/media/FIaB22rVcAA3Pv-.jpg%3Alarge')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

 