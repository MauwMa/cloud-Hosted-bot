module.exports = {
    name: 'minigame',
    description: 'minigame',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const minigame = new Discord.MessageEmbed()
        .setColor('2ecc71')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle("Mini Game")
        
        .setTimestamp()
        .setDescription('Parancsnokok, egy új mini game érkezett nyaaa~ Frakcióként szerintetek, ki a legjobb Main/Vanguard helyre? \n\nTemplate:\n\nEagle Union   Main:   Vanguard:   \n\nRoyal Navy   Main:   Vanguard:   \n\nSakura Empire   Main:   Vanguard:   \n\nIron Blood   Main:   Vanguard:   \n\nDragon Empery   Vanguard:   \n\nSardegna Empire   Main:   Vanguard:   \n\nNorthern Parliament   Main:   Vanguard:   \n\nFrench Navy   Main:   Vanguard:   ')
        .setImage('')
        client.channels.cache.find(channel => channel.id === "811875214345764886").send(minigame);
        if (minigame){
            return message.channel.send(`Elküldtem az minigame-t nyaaa~`);
          }
    }    
}

 