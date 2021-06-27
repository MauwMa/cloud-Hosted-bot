module.exports = {
    name: 'build',
    description: 'build',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const build = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Ezekre készült buildek')
        .setURL('')
        .setDescription('Alabama, Amagi, Aquila, Atago, Ayanami, Azuma, Bismarck, Friedrich, Heinrich, Helena, Howe, Ibuki, Independence, Intrepid, Jeanne dArc, Kasumi, Laffey, London, LongIsland, Mainz, Montpelier, Mutsuki, Nagato, Nakiriayame,NewJersey, Noshiro, Perseus, PrinzEugen, Ranger, Richelieu, Roon, SanDiego, SanFrancisco ,Shangrila, Shinano, ShirakamiFubuki, SouthDakota , Suruga, Suzutsuki, Swiftsure, Tripitz, Z23')
        message.channel.send(build);

    }    
}