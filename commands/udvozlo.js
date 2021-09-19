module.exports = (client) => {
    const welcomechannelId = '853629612986990612' //Channel You Want to Send The Welcome Message
    const targetChannelId = `789934791260241931` //Channel For Rules

    client.on('guildMemberAdd', (member) => {
        console.log(member) // If You Want The User Info in Console Who Joined Server Then You Can Add This Line. // Optional
        const channel = member.guild.channels.cache.get(welcomechannelId)

        const embed = new MessageEmbed()
        .setTitle(`Üdvözöllek ${member.guild.name} szerverén`)
        .setThumbnail(member.user.displayAvatarURL({dynamic: true, size: 512}))
        .setDescription(`Üdvözöllek <@${member.user.id}>, Welcome to **${member.guild.name}**. Thanks For Joining Our Server.
Please Read ${member.guild.channels.cache.get(targetChannelId).toString()}. Have a Nice Time.
Chat In <#787083837833871404>`)
        // You Can Add More Fields If You Want
        .setFooter(`Welcome ${member.user.username}#${member.user.discriminator}`,member.user.displayAvatarURL({dynamic: true, size: 512}))
        .setColor('RANDOM')
    channel.send(embed)
        
    })
}