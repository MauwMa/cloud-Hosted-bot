module.exports = {
    name: 'build',
    description: 'build',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const build = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Ezekre készült buildek')
        .setURL('')
        .setDescription('Alabama, Amagi, Aquila, Atago, Ayanami, Azuma, Bismarck, Formidable, Friedrich, Heinrich, Helena, Hipper, Hood, Howe, Ibuki, Independence, Intrepid, Jeanne dArc, Kasumi, Laffey, London, LongIsland, Mainz, Montpelier, Mutsuki, Nagato, Nakiriayame, NewJersey, Noshiro, Nurnberg, Odin, Ookamimio, Perseus, PrinzEugen, Ranger, Richelieu, Roon, Ryuuhou, SanDiego, SanFrancisco, Scharnhorst, Shangrila, Shinano, ShirakamiFubuki, SouthDakota, Sovetskaya, Suruga, Suzutsuki, Swiftsure, Tripitz, Tosa, Warspite, Z23')
        message.channel.send(build);

    }    
}