module.exports = {
    name: 'azurtalk',
    permissions: ["KICK_MEMBERS"],
    description: 'azurtalk',
    execute (client, message, args, Discord){
        const azurtalk = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setTitle('AzurTalk')
        .setURL('')
        .setDescription('Az eheti AzurTalk Hétköznap vagy Hétvégén legyen nyaaa~\n\nUni -> hétköznap\nMinea -> hétvége')
        client.channels.cache.find(channel => channel.id === "856904370595561473").send(azurtalk)
        .then ((msg) => {setTimeout(function(){
            msg.react("<:uniiszik:790194634163748904>")
            msg.react("<:minikorty:852821789046472705>")
        }, 1000)})
        
if (message.deletable) message.delete();
    }    

}