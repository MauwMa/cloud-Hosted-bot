module.exports = {
    name: 'build',
    description: 'build',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const build = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Ezekre készült buildek')
        .setURL('')
        .setDescription('Alabama, Amagi, Aquila, Atago, Ayanami, Azuma, Bismarck, Friedrich, Heinrich, Helena, Howe, Ibuki, Independence, Intrepid, Jeanne dArc, Laffey, London, LongIsland, Montpelier, Mutsuki, Nagato, NewJersey, Noshiro, Perseus, PrinzEugen, Richelieu, Roon, SanDiego, SanFrancisco ,Shangrila, Shinano, ShirakamiFubuki, SouthDakota , Suruga, Suzutsuki, Swiftsure, Tripitz, Z23')
        message.channel.send(build);

    }    
}