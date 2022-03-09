module.exports = {
    name: 'szar',
    description: 'szar',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args){

        message.channel.send("Parancsnokok, egy új mini gamel készültem nyaaa~ Frakcióként szerintetek, ki a legjobb Main/Vanguard helyre? \n\nFrakciók: Eagle Union, Royal Navy, Sakura Empire, Iron Blood, Dragon Empery, Sardegna Empire, Northern Parliament, Iris Libre, Vichya Dominion");

    if (message.deletable) message.delete();

    }    
}