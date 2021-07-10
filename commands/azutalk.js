module.exports = {
    name: 'azurtalk',
    permissions: ["KICK_MEMBERS"],
    description: 'azurtalk',
    execute (client, message, args, Discord){
        const azurtalk = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setTitle('AzurTalk')
        .setURL('')
        .setDescription('Az eheti AzurTalk szombaton magyar időszámítás szerint 18:00-kor nyaaa~')
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