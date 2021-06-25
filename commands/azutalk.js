module.exports = {
    name: 'azurtalk',
    permissions: ["KICK_MEMBERS"],
    description: 'azurtalk',
    execute (client, message, args, Discord){
        const azurtalk = new Discord.MessageEmbed()
        .setColor('#f2082d')
        .setTitle('AzurTalk')
        .setURL('')
        .setDescription('Üdvözletem Parancsnokok nyaaaa~\nAz eheti AzurTalk vasárnap lesz délután, kinek hány órakkor lenne jó nyaaa~?')
        message.channel.send(azurtalk);

    }    
}