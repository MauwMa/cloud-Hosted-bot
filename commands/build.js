module.exports = {
    name: 'build',
    description: 'build',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const build = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Ezekre készült buildek')
        .setURL('')
        .setDescription('Akashi, Alabama, Aquila, Atago, Ayanami, Azuma, Bismarck, Formidable, Friedrich, Heinrich, Helena, Hipper, Hood, Howe, Ibuki, Independence, Intrepid, Jeanne dArc, Kashino, Kasumi, Kent, Kinggeorge, Laffey, London, LongIsland, Mainz, Maya, Montpelier, Mutsuki, Nagato, Nakiriayame, Neptune, NewJersey, Noshiro, Nurnberg, Odin, Ookamimio, Perseus, PrinzEugen, Ranger, Richelieu, Roon, Ryuuhou, Saintlousis, SanDiego, SanFrancisco, Scharnhorst, Seattle, Shangrila, Shinano, ShirakamiFubuki, Souryuu, SouthDakota, Sovetskaya, Suruga, Suzutsuki, Swiftsure, Tashkent, Tirpitz, Tosa, Warspite, Yukikaze, Z23')
        message.channel.send(build);

    }    
}