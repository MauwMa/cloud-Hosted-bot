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
        message.channel.send(azurtalk)
   //     .then ((msg) => {setTimeout(function(){
   //         msg.react("")
   //         msg.react("")
   //     }, 1000)})
        
if (message.deletable) message.delete();
    }    

}