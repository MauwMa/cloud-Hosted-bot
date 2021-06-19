module.exports = {
    name: 'build',
    description: 'build',
    execute (message, args, Discord){
        const build = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Ezekre készült buildek')
        .setURL('')
        .setDescription('Alabama, Amagi, Aquila, Atago, Ayanami, Azuma, Bismarck,\nFriedrich, Heinrich, Helena, Howe, Ibuki, Intrepid, \nLaffey, LongIsland, Montpelier, Mutsuki, Nagato, NewJersey, \nNoshiro, Perseus, PrinzEugen, Richelieu, SanDiego, \nSanFrancisco ,Shangrila, Shinano, ShirakamiFubuki, SouthDakota ,\nSuruga, Suzutsuki, Swiftsure, Tripitz, Z23')
        message.channel.send(build);

    }    
}