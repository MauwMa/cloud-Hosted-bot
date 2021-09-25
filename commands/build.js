module.exports = {
    name: 'build',
    description: 'build',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const build = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Ezekre készültek buildek')
        .setURL('')
        .setDescription('Agir, Akashi, Alabama, Aquila, Arkroyal, Atago, Ayanami, Azuma, Bismarck, Bremerton, Formidable, Friedrich, Heinrich, Helena, Hipper, Hood, Howe, Ibuki, Independence, Intrepid, Jeanbart JeannedArc, Kashino, Kasumi, Kent, Kinggeorge, Kinu, Laffey, LeMalin, London, LongIsland, Mainz, Maya, Montpelier, Mutsuki, Nagato, Nakiriayame, Neptune, NewJersey, Noshiro, Nurnberg, Odin, Ookamimio, Perseus, PrinzEugen, Ranger, Richelieu, Roon, Ryuuhou, Saintlousis, SanDiego, SanFrancisco, Scharnhorst, Seattle, Shangrila,  Shimakaze, Shinano, ShirakamiFubuki, Shoukaku, Souryuu, SouthDakota, Sovetskaya, Suruga, Suzutsuki, Swiftsure, Tashkent, Tirpitz, Tosa, Warspite, Yukikaze, Z23')
        message.channel.send(build);

    }    
}