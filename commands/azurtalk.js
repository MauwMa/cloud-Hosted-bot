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
        .setDescription('Magyar időszámítás szerint 19:00-kor lesz azur talk nyaaa~')
        client.channels.cache.find(channel => channel.id === "856904370595561473").send(azurtalk)
       //     .then ((msg) => {setTimeout(function(){
       //     msg.react('1️⃣')
       //     msg.react('2️⃣')
       //     msg.react('3️⃣')
       //     msg.react('4️⃣')
       //     msg.react('5️⃣')
       //     msg.react('6️⃣')
       //     msg.react('7️⃣')
       //     msg.react('8️⃣')
       //  }, 1000)})
        
//if (message.deletable) message.delete();
if (azurtalk){
    return message.channel.send(`Elküldtem az AzurTalk üzenetet nyaaa~`);
  }

    }    

}