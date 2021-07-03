module.exports = {
    name: 'azurtalk',
    permissions: ["KICK_MEMBERS"],
    description: 'azurtalk',
    execute (client, message, args, Discord){
        const azurtalk = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setTitle('AzurTalk')
        .setURL('')
        .setDescription('Ma 20:00-kor lesz az AzurTalk nyaaa~')
        message.channel.send(azurtalk)
        .then ((msg) => {setTimeout(function(){
            msg.react("")
            msg.react("")
        }, 1000)})
        
if (message.deletable) message.delete();
    }    

}