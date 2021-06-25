module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Swirling Cherry Blossoms')
        .setURL('')
        .setDescription('Parancsnokok, a Swirling Cherry Blossoms event visszatért! Sikerült már találkoznotok Noshiroval és Ryuuhouval?\nhttps://www.youtube.com/watch?v=dGadadIQo0g')
        message.channel.send(update);
    if (message.deletable) message.delete();
    }    
}