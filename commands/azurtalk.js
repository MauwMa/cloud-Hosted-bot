module.exports = {
    name: 'azurtalk',
    permissions: ["KICK_MEMBERS"],
    description: 'azurtalk',
    execute (client, message, args, Discord){
        const azurtalk = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setTitle('AzurTalk')
        .setURL('')
        .setTimestamp()
        .setDescription('AzurTalk Szombaton!!! Délután kinek mikor lenne jó?')
        client.channels.cache.find(channel => channel.id === "791956226521956394").send(azurtalk)
           .then ((msg) => {setTimeout(function(){
           msg.react('1️⃣')
           msg.react('2️⃣')
        }, 1000)})
        
//if (message.deletable) message.delete();
if (azurtalk){
    return message.channel.send(`Elküldtem az AzurTalk üzenetet nyaaa~`);
  }

    }    

}