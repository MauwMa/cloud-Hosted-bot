module.exports = {
    name: 'azurtalk',
    permissions: ["KICK_MEMBERS"],
    description: 'azurtalk',
    execute (client, message, args, Discord){
        const azurtalk = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setTitle('AzurTalk')
        .setURL('')
        .setDescription('Az eheti AzurTalk hétvégén lesz. Kinek mikor jó Szombat vagy Vasárnap?')
        client.channels.cache.find(channel => channel.id === "856904370595561473").send(azurtalk)
        .then ((msg) => {setTimeout(function(){
            msg.react("<:uniiszik:790194634163748904>")
            msg.react("<:minikorty:852821789046472705>")
        }, 1000)})
        
if (message.deletable) message.delete();
if (azurtalk){
    return message.channel.send(`Elküldtem az AzurTalk üzenetet nyaaa~`);
  }

    }    

}