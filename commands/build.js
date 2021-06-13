module.exports = {
    name: 'build',
    description: 'build',
    execute (message, args, Discord){
        const build = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Ezekre készült buildek')
        .setURL('')
        .setDescription('Alabama, Amagi, Aquila, Atago, Ayanami, Azuma,\nBismarck, Friedrich, Heinrich, Helena, Howe, Ibuki, \nIntrepid, Laffey, LongIsland, Nagato, NewJersey, Noshiro, Perseus, \nRichelieu, SanDiego, Shangrila, Shinano, Suzutsuki, ShirakamiFubuki,\nSwiftsure,Tripitz, Z23,')
        message.channel.send(build);

    }    
}