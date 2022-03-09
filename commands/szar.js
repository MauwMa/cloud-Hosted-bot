module.exports = {
    name: 'szar',
    description: 'szar',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args){

        message.channel.send("Parancsnokok, egy új mini gamel készültem nyaaa~ Frakcióként szerintetek, ki a legjobb Main/Vanguard helyre? \n\nFrakciók: Eagle Union\n\n Royal Navy\n\n Sakura Empire\n\n Iron Blood\n\n Dragon Empery\n\n Sardegna Empire\n\n Northern Parliament\n\n French Navy");

    if (message.deletable) message.delete();

    }    
}