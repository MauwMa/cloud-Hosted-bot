module.exports = {
    name: 'felszer',
    description: 'felszer',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#c30000')
        .setTitle('Felszerelés Útmutatók')
        .setURL('')
        .setDescription('')
        .setTimestamp()
        .addFields(
            {name: 'Battleship Main Gun útmutató', value: ':small_blue_diamond: /felszer-bbmain'},
        )
        message.channel.send(newEmbed);

    }    
}