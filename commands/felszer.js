module.exports = {
    name: 'felszer',
    description: 'felszer',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const felszer = new Discord.MessageEmbed()
        .setColor('#2ecc71')
        .setTitle('Felszerelés Útmutatók')
        .setURL('')
        .setDescription('')
        .setTimestamp()
        .addFields(
            {name: 'Csatahajók útmutatók', value: ':small_blue_diamond: Főfegyver: /felszer-bbmain'},
            {name: 'Repülőgép-Hordozó útmutatók', value: ':samll_blue_diamond: Repülőgépek: /felszer-cvrepcsik'},
        )
        message.channel.send(felszer);

    }    
}