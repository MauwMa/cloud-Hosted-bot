module.exports = {
    name: 'build',
    description: 'build',
    execute (message, args, Discord){
        const build = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Ezekre készült buildek')
        .setURL('')
        .setDescription('Alabama, Amagi, Aquila, Atago, Ayanami, Azuma,\nBismarck, Friedrich, Helena, Howe, Ibuki, Intrepid,\nLaffey, LongIsland, Nagato, NewJersey, SanDiego, Shangrila,\nShinano, Suzutsuki, Swiftsure, Tripitz, Z23,')
        message.channel.send(build);

    }    
}