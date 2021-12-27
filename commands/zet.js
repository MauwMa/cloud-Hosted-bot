module.exports = {
    name: 'zet',
    description: 'zte',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args){

        message.channel.send('Az új Iron Blood főesemény, "Tower of Transcendence", December 30. fog kezdődni\n új Ultra Rare csatahajóval, Ulrich Von Hutten és még másokkal!\nhttps://youtu.be/82Rwtv9F1Zg')

    if (message.deletable) message.delete();

    }
}