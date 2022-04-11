module.exports = {
    name: 'update3',
    description: 'update3',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle('【Aurora Noctis Rerun】')
        .setURL('')
        .setTimestamp()
        .setDescription('Az Aurora Noctis Rerun a következő karbantartással fog elkezdődni. Jelentkezzbe az event időszakában, hogy Építés Jegyeket és Event Pontokat kapj. A további Jegyek a küldetések jutalmaiban lesznek.')
        .setImage('https://images-ext-2.discordapp.net/external/Db3Fs2kSJuQZvzKdHHLx4FmAqn2St6TaDPszRMAorzs/https/pbs.twimg.com/media/FQDkIRJWYAIzqeM.png')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update3);
        if (update3){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}