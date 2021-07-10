module.exports = {
    name: 'azurtalk',
    permissions: ["KICK_MEMBERS"],
    description: 'azurtalk',
    execute (client, message, args, Discord){
        const azurtalk = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setTitle('AzurTalk')
        .setURL('')
        .setDescription('1 órás előzetes értesítés az AzurTalktról. Csevegő nyitva, a Voice chat 19:25-kor fog nyílni gyülekezésre és 19:30-kor kezdünk nyaaa~')
        client.channels.cache.find(channel => channel.id === "856904370595561473").send(azurtalk)
       // .then ((msg) => {setTimeout(function(){
         //   msg.react("<:one:>")
        //    msg.react(":regional_indicator_v:")
        //}, 1000)})
        
if (message.deletable) message.delete();
if (azurtalk){
    return message.channel.send(`Elküldtem az AzurTalk üzenetet nyaaa~`);
  }

    }    

}