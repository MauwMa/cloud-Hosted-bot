module.exports = {
    name: 'update2',
    description: 'update2',
    execute (message, args, Discord){
        const update2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Értesítés!')
        .setURL('')
        .setDescription('Parancsnokok,\n\nA harmadik évforduló weboldala elérhető! Érdekes információk vannak fent a liveról és eventről! Több információ a Rajz versenyről és Cosplay versenyről hamarosan posztolva lesznek nyaaa~\n Látogass el ide: https://t.co/PX0P5obOdT')
        .setImage('https://images-ext-2.discordapp.net/external/23j_vWpixjmOcq1Ye1IWaJvDqrsCrAuWThHDPuKjqtk/https/pbs.twimg.com/media/E3-456sVIAQYONB.png%3Alarge?width=667&height=676')
        message.channel.send(update2);
    if (message.deletable) message.delete();
    }    
}