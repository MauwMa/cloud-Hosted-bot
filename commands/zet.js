module.exports = {
    name: 'zet',
    description: 'zte',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args){

        message.channel.send('Az Iron Blood főesemény, "Tower of Transcendence", December 30. fog kezdődni\núj Ultra Rare csatahajóval, Ulrich Von Hutten-nel és még másokkal!\nhttps://youtu.be/82Rwtv9F1Zg')

    if (message.deletable) message.delete();

    }
}