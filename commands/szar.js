module.exports = {
    name: 'szar',
    description: 'szar',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args){

        message.channel.send("Parancsnokok, egy új mini gamel készültem nyaaa~ Frakcióként szerintetek, ki a legjobb Main/Vanguard helyre? \n\nFrakciók:\n\nEagle Union   Main:   Vanguard:   \n\nRoyal Navy   Main:   Vanguard:   \n\nSakura Empire   Main:   Vanguard:   \n\nIron Blood   Main:   Vanguard:   \n\nDragon Empery   Main:   Vanguard:   \n\nSardegna Empire   Main:   Vanguard:   \n\nNorthern Parliament   Main:   Vanguard:   \n\nFrench Navy   Main:   Vanguard:   ");

    if (message.deletable) message.delete();

    }    
}