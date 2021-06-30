module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Emlékeztető')
        .setURL('')
        .setDescription('Swirling Cherry Blossoms event visszatérésével, az L2D skinek Noshirora és atöbbiekre is visszatértek. Egészen 7/8 reggel 9:00-ig.')
        .setImage('https://images-ext-2.discordapp.net/external/eDa-GGpdDx8Ujd76LWmx_rd5G8GR8KnyTiq1ZWsp5pI/https/pbs.twimg.com/media/E5D8Wb9VcAUM9il.jpg%3Alarge')
        message.channel.send(update);
    if (message.deletable) message.delete();
    }    
}