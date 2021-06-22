module.exports = {
    name: 'azurtalk',
    description: 'azurtalk',
    execute (client, message, args, Discord){
        const azurtalk = new Discord.MessageEmbed()
        .setColor('#f2082d')
        .setTitle('AzurTalk')
        .setURL('')
        .setDescription('Üdvözletem Parancsnokok nyaaaa~\nAz eheti AzurTalk kinek mikor lenne jó nyaaa~?\nS=>Szombat ||| V=>Vasárnap')
        message.channel.send(azurtalk);

    }    
}