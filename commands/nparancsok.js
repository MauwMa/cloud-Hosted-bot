module.exports = {
    name: 'parancsok',
    description: 'parancsok',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const parancsoks = new Discord.MessageEmbed()
        .setColor('#bada55')
        .setTitle('Parancsok')
        .setURL('')
        .setDescription('/ehes | /frakcio | /ham | /ham2 | /karveg | /keres | /tema | /update')
        message.channel.send(parancsoks);

        if (message.deletable) message.delete();
    }    
}