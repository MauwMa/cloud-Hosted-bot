module.exports = {
    name: 'update2',
    description: 'update2',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('❀At School with Foo❀')
        .setURL('')
        .setDescription('IJN Kasumi új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')
        .setImage('https://images-ext-2.discordapp.net/external/c77rbDpuvL849u4d6hTMbcHxeWNxgRr9bd0PwoerfYs/https/pbs.twimg.com/media/E4lNunaVcAgBhg1.jpg%3Alarge?width=1365&height=675')
        message.channel.send(update2);
    if (message.deletable) message.delete();
    }    
}