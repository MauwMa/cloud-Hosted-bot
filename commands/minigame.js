module.exports = {
    name: 'minigame',
    description: 'minigame',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args){

        message.channel.send("Parancsnokok, egy új mini game érkezett nyaaa~ Frakcióként szerintetek, ki a legjobb Main/Vanguard helyre? \n\nTemplate:\n\nEagle Union   Main:   Vanguard:   \n\nRoyal Navy   Main:   Vanguard:   \n\nSakura Empire   Main:   Vanguard:   \n\nIron Blood   Main:   Vanguard:   \n\nDragon Empery   Main:   Vanguard:   \n\nSardegna Empire   Main:   Vanguard:   \n\nNorthern Parliament   Main:   Vanguard:   \n\nFrench Navy   Main:   Vanguard:   ");

    if (message.deletable) message.delete();

    }    
}