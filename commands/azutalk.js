module.exports = {
    name: 'azurtalk',
    permissions: ["KICK_MEMBERS"],
    description: 'azurtalk',
    execute (client, message, args, Discord){
        const azurtalk = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setTitle('AzurTalk')
        .setURL('')
        .setDescription('Ma 19:30-kor lesz az AzurTalk. Mivel nagyon nem történt nagyon semmi a héten, így max 1 órás lesz nyaaa~')
        message.channel.send(azurtalk)
        .then ((msg) => {setTimeout(function(){
            msg.react("")
            msg.react("")
        }, 1000)})
        
if (message.deletable) message.delete();
    }    

}