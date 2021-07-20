module.exports = {
    name: 'update2',
    description: 'update2',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('❀Mennyei Virágok Tükörképei❀')
        .setURL('')
        .setDescription('Chihaya Kisaragi új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')
        .setImage('https://images-ext-2.discordapp.net/external/DUuCor1DiCTo97Zy5F2ZcPXaS9VR7TW-TuRXM2CUpXk/https/pbs.twimg.com/media/E6p1QD3VoAAWFVR.jpg%3Alarge?width=1090&height=567')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update2);
        if (update2){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}