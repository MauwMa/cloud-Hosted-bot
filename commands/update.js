module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('❀Bunny Breeder❀')
        .setURL('')
        .setDescription('IJN Shirayuki új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')
        .setImage('https://images-ext-1.discordapp.net/external/kck077-8nmxMdNoYbYLGgiySQ3IJ036N-n55LzZAbX0/https/pbs.twimg.com/media/E4t8nOwVgAINpPm.jpg%3Alarge?width=1271&height=629')
        message.channel.send(update);
    if (message.deletable) message.delete();
    }    
}