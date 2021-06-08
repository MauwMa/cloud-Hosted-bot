module.exports = {
    name: 'opsiren',
    description: 'opsiren',
    execute (message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Operation Siren Útmutatók')
        .setURL('')
        .setDescription('')
        .addFields(
            {name: 'Operation Sirenhez útmutatók és egyéb segítségre szolgaló dolgok', value: ':small_blue_diamond:[Operation Siren Corrosin 7 útmutató](http://shorturl.at/lBFL8) by Cica'},
        )
        message.channel.send(newEmbed);

    }    
}