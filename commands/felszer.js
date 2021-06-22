module.exports = {
    name: 'felszer',
    description: 'felszer',
    execute (client, message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#c30000')
        .setTitle('Felszerelés Útmutatók')
        .setURL('')
        .setDescription('')
        .addFields(
            {name: 'Felszerelésekhez útmutatók és egyéb segítségre szolgaló dolgok', value: ':small_blue_diamond:[Felszerelés Angol Útmutató ](https://imgur.com/a/TNpH1rL) by Nerezza'},
        )
        message.channel.send(newEmbed);

    }    
}