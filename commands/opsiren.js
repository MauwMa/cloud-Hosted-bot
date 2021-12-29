module.exports = {
    name: 'opsiren',
    description: 'opsiren',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#2ecc71')
        .setTitle('Operation Siren Útmutatók')
        .setURL('')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setDescription('')
        .setTimestamp()
        .addFields(
            {name: 'Operation Sirenhez útmutatók és egyéb segítségre szolgaló dolgok', value: ':small_blue_diamond:[Operation Siren Corrosin 7 útmutató](http://shorturl.at/lBFL8) by Cica'},
        )
        message.channel.send(newEmbed);

    }    
}