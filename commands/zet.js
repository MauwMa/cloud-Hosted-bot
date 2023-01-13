module.exports = {
    name: 'zet',
    description: 'zet',
    permissions: ["KICK_MEMBERS"],
    execute(client, message, args) {
  
      message.channel.send("https://twitter.com/AzurLane_EN/status/1605911032181886978")
  
      if (message.deletable) message.delete();
  
    }
  }
  
  
  