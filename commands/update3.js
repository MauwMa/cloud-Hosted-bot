module.exports = {
    name: 'update3',
    description: 'update3',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle(``)
        
        .setDescription(`Parancsnokok,\n\n A következő Augment Modulok elérhetőek lesznek a következő karbantartás után!\nChaser - Bizarr Teaidő\nLe Triomphatn - Lovag-Hercegnő Páncélkesztyűje`)
        .setImage('https://images-ext-1.discordapp.net/external/0nU9RFgjV1wjNXg4wFH8vs6F6geGkDbSmcLD1ZSj9eg/https/pbs.twimg.com/media/FmLwJWSaEAE2efr.png')
        .setTimestamp()
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update3);
        if (update3){
            return message.channel.send(`Elküldtem az updatet nyaaa~ `);   
          }
    }
}  