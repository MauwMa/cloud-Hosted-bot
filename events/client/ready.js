module.exports = () =>{
    console.log('Akashi online');

    client.on('guildMemberAdd', guildMember =>{
        let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'valami');
     
        guildMember.roles.add(welcomeRole);
        guildMember.guild.channels.cache.get('781214332583149599').send(`Welcome <@${guildMember.user.id}> to our server! Make sure to check out the rules channel!`)
    })
}