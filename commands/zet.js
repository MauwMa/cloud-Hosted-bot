module.exports = {
    name: 'zet',
    description: 'zet',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const zet = new Discord.MessageEmbed()
        .setColor('#2ecc71')
        .setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
        .setTitle('teszt teszt teszt teszt ')
        .setTimestamp()
        .setURL('')
        .setDescription('teszt teszt teszt teszt teszt teszt ')
        message.channel.send(zet);

        if (message.deletable) message.delete();
    }    
}