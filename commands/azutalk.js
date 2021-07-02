module.exports = {
    name: 'azurtalk',
    permissions: ["KICK_MEMBERS"],
    description: 'azurtalk',
    execute (client, message, args, Discord){
        const azurtalk = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setTitle('AzurTalk')
        .setURL('')
        .setDescription('Szombaton hány órakkor tartsuk meg?')
        message.channel.send(azurtalk)
        .then ((msg) => {setTimeout(function(){
            msg.react(":regional_indicator_s:")
            msg.react(":regional_indicator_v:")
        }, 1000)})
        
if (message.deletable) message.delete();
    }    

}