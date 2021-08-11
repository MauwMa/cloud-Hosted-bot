module.exports = {
    name: 'update2',
    description: 'update2',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('♚Ark Royal (Retrofit)♚')
        .setURL('')
        .setDescription('Jelenleg Ark Royal a kikötőben van fejlesztés miatt. Hamarosan vízre lesz bocsájtva nyaaa~')
        .setImage('https://images-ext-2.discordapp.net/external/zc97PiZv3gbhza3ykX70IjMaBAxYvl6QcTLZtjdLZkg/https/pbs.twimg.com/media/E8fCUjaVEAcbLx-.jpg%3Alarge?width=546&height=910')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update2);
        if (update2){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}