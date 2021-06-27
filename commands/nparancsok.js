module.exports = {
    name: 'nparancsok',
    description: 'nparancsok',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const nparancsoks = new Discord.MessageEmbed()
        .setColor('#bada55')
        .setTitle('Parancsok')
        .setURL('')
        .setDescription('/ehes | /frakcio | /ham | /ham2 | /karveg | /keres | /tema | /update')
        message.channel.send(nparancsoks);

        if (message.deletable) message.delete();
    }    
}