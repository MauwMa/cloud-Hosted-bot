module.exports = {
    name: 'nparancsok',
    description: 'nparancsok',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const nparancsoks = new Discord.MessageEmbed()
        .setColor('#2ecc71')
        .setTitle('Parancsok')
        .setTimestamp()
        .setURL('')
        .setDescription('/ehes | /frakcio | /ham | /ham2 | /karveg | /keres | /tema | /update | /mute1 | /mute2 | /mute3 | /egyora | /karban')
        message.channel.send(nparancsoks);

        if (message.deletable) message.delete();
    }    
}