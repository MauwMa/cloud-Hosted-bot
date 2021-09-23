module.exports = {
    name: 'update2',
    description: 'update2',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('★The Longing Princess★')
        .setURL('')
        .setDescription('Rendben, a ruha jól néz ki. Ellenőrzöm a sminket... Alaposnak kell lennem, így nem fogom beégetni magam mikor találkozok- MI??? P-Parancsnok?!\n\nUSS San Juan az új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')
        .setImage('https://images-ext-2.discordapp.net/external/YXFtpJdxPFzFm-JSAPqw3Nl4pgrMYMdKkhCtw-BqdvQ/https/pbs.twimg.com/media/E_42rXUUUAgEOYb.jpg%3Alarge?width=1112&height=405')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update2);
        if (update2){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}