module.exports = (client) => {
    const channelId = "853629612986990612";
    const rulesChannel = "853629612986990612";
    client.on("guildMemberAdd", (member) => {
      console.log(member);
  
      const message = `Welcome <@${
        member.id
      }> to our server! Be sure to check out our ${member.guild.channels.cache
        .get(rulesChannel)
        .toString()}`;
  
      const channel = member.guild.channels.cache.get(channelId);
      channel.send(message);
    });
  };