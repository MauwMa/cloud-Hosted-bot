module.exports = {
    name: 'felszer',
    description: 'felszer',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const felszer = new Discord.MessageEmbed()
        .setColor('#2ecc71')
        .setTitle('Felszerelés Útmutatók')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setURL('')
        .setDescription('')
        .setTimestamp()
        .addFields(
            {name: 'Csatahajó útmutatók:', value: ':small_blue_diamond: Főfegyver: /felszer-bbmain'},
            {name: 'Repülőgép-Hordozó útmutatók:', value: ':small_blue_diamond: Repülőgépek: /felszer-cvrepcsik'},
            {name: 'Cirkáló útmutatók', value: ':small_blue_diamond: Főfegyver: /felszer-cruisermain'},
            {name: 'Romboló útmutatók:', value: ':small_blue_diamond: Főfegyver: /felszer-ddmaingun'},
            {name: 'Általános útmutatók:', value: ':small_blue_diamond: Légvédelem: /felszer-antiair\n:small_blue_diamond: Torpedók: /felszer-torpedo\n:small_blue_diamond: Auxiliary Hátsósor: /felszer-auxmain'}
            
            
        )
        message.channel.send(felszer);

    }    
}