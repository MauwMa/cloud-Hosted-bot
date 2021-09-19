module.exports = {
  name: 'udvozlo',
  permissions: ["KICK_MEMBERS"],
  description: 'udvozlo',
  execute (client, message, args){
  
    const channelId = "789927360329416758";
    const rulesChannel = "789927360329416758";
    client.on("guildMemberAdd", (member) => {
      console.log(member);
  
      const message = `Welcome <@${
        member.id
      }> to our server! Be sure to check out our ${member.guild.channels.cache
        .get(rulesChannel)
        .toString()}`;
  
      const channel = member.guild.channels.cache.get(channelId);
      channel.send(message);
    })
  }
}