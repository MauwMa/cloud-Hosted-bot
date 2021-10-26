module.exports = {
    name: 'update3',
    description: 'update3',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('★Kastély Mesék★')
        .setURL('')
        .setTimestamp()
        .setDescription('Öhm, úgy döntöttem, hogy felpróbálok egy jelmezt mivel Halloween van meg minden... Szerinted olyan boszorkányos kinézetem van...?\n\nUSS Boise az új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')
        .setImage('https://images-ext-2.discordapp.net/external/icbSnEeJddNZd34he_7DUeJP67rzAWi9Gq1w5MGCqgQ/https/pbs.twimg.com/media/FCnmyr8VIAQa9Xk.jpg%3Alarge?width=1266&height=556')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update3);
        if (update3){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}