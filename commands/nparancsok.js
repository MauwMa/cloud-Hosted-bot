module.exports = {
    name: 'nparancsok',
    description: 'nparancsok',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const nparancsok = new Discord.MessageEmbed()
        .setColor('#2ecc71')
        .setTitle('Parancsok')
        .setTimestamp()
        .setURL('')
        .setDescription('/egyora | /felmeres | /ehes | /frakcio | /ham | /ham2 | /karveg | /karban | /keres | /tema | /kuka | /update | /mute1 | /mute2 | /mute3 | /egyora |')
        message.channel.send(nparancsok);

        if (message.deletable) message.delete();
    }    
}