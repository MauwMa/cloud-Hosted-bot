module.exports = {
    name: 'azurtalk',
    permissions: ["KICK_MEMBERS"],
    description: 'azurtalk',
    execute (client, message, args, Discord){
        const azurtalk = new Discord.MessageEmbed()
        .setColor('#f2082d')
        .setTitle('AzurTalk')
        .setURL('')
        .setDescription('Az időpont lezárult. 6/27 Vasárnap 19:00-kor lesz az AzurTalk nyaaa~')
        message.channel.send(azurtalk);


if (message.deletable) message.delete();
    }    

}