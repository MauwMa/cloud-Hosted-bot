module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('★Shopping Carte Blanche★')
        .setURL('')
        .setDescription('USS Cassin új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')
        .setImage('https://images-ext-2.discordapp.net/external/mfhGXwbeFR0LoADRer--5Ngs9HAfWRvtbLlVDtgc5UY/https/pbs.twimg.com/media/E4nrldwVUAwwkrl.jpg%3Alarge?width=1839&height=910')
        message.channel.send(update);
    if (message.deletable) message.delete();
    }    
}