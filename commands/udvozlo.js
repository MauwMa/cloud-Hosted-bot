module.exports = (client) => {
    const channelID = '791956226521956394' //Üdvözlő csatorna
    
    client.on('guildMemberAdd', (member) => {
        console.log(member)

        const message = `Üdvözöllek <@${member.id}> az Azur Lane magyar szerverén nyaaa~`

        const channel = member.guild.channels.cache.get(channelId)
        channel.send(message)
    })
}
