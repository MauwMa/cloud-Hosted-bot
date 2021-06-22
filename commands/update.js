module.exports = {
    name: 'update',
    description: 'update',
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('★Azur Lane X THE IDOLM@STER Collaboration★')
        .setURL('')
        .setDescription('More information about the collaboration will be coming soon. Stay Tuned!'
        .setImage('https://images-ext-2.discordapp.net/external/9JGSYst1UaA7B2QP22UpsmbRbMJWaU3i0coaSm0erzc/https/pbs.twimg.com/media/E4Usb53VgAI1aDK.jpg%3Alarge?width=1271&height=629')
        message.channel.send(update);
    if (message.deletable) message.delete();
    }    
}