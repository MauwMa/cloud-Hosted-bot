module.exports = {
    name: 'felmeres',
    permissions: ["KICK_MEMBERS"],
    description: 'felmeres',
    execute (client, message, args, Discord){
        const felmeres = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Felmérés')
        .setURL('')
        .setDescription('Kíváncsiskodásképp ki az, aki hanggal játsza a játékot?')
        message.channel.send(felmeres)
        .then ((msg) => {setTimeout(function(){
            msg.react('<:Javyes:883269683439091712>')
            msg.react('<:Javno:883269657174372382>')
        }, 1000)})
        
    }    

}