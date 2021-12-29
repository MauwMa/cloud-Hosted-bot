module.exports = {
    name: 'zet',
    description: 'zet',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const zet = new Discord.MessageEmbed()
        .setColor('#2ecc71')
        .setAuthor({ name: 'Azur Lane Hungary' , iconURL: 'https://i.imgur.com/6DgcVUu.png'})
        .setTitle('teszt teszt teszt teszt ')
        .setTimestamp()
        .setURL('')
        .setDescription('teszt teszt teszt teszt teszt teszt ')
        message.channel.send(zet);

        if (message.deletable) message.delete();
    }    
}