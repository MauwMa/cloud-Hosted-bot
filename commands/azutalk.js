module.exports = {
    name: 'azurtalk',
    permissions: ["KICK_MEMBERS"],
    description: 'azurtalk',
    execute (client, message, args, Discord){
        const azurtalk = new Discord.MessageEmbed()
        .setColor('#GREEN')
        .setTitle('AzurTalk')
        .setURL('')
        .setDescription('1 órás előzetes értesítés az AzurTalktról.\nCsevegő nyitva, a Voice chat 18:55-kor fog nyílni gyülekezésre és 19:00-kor kezdünk nyaaa~')
        message.channel.send(azurtalk);


if (message.deletable) message.delete();
    }    

}