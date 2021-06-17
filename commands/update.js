module.exports = {
    name: 'update',
    description: 'update',
    execute (message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Dawning Ceremony Rerun')
        .setURL('')
        .setDescription('A bevezető event Dawning Ceremony Rerun a Swirling Cherry Blossoms Rerun eventre a karbantartás után elérhető lesz. Gyűjts extra tapasztalatot Akatsuki, Shigure, Shoukaku és Atagóra, hogy felkészülj az eventre.')
        .setImage('https://images-ext-1.discordapp.net/external/jUmQZECMQtVhjUYBs14bXcmnays578Bd660BHUZiK18/https/pbs.twimg.com/media/E4AZ9nLVkAYsoAO.png%3Alarge')
        message.channel.send(update);
    if (message.deletable) message.delete();
    }    
}