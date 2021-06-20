module.exports = {
    name: 'update',
    description: 'update',
    execute (message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Meme Review')
        .setURL('')
        .setDescription('Parancsnokok\n\n Azur Lane két személyzete reagált a Mémeitekre nyaaa~\n\nNézzétek meg itt: https://t.co/ve1t0yaGY6')
        .setImage('https://images-ext-2.discordapp.net/external/VDhk617N-_QpYRxsH9OhVng4zoPXjlLb5nd-xXUT5_c/https/pbs.twimg.com/media/E4Fizw4UUAI4ToU.jpg%3Alarge?width=1202&height=676')
        message.channel.send(update);
    if (message.deletable) message.delete();
    }    
}