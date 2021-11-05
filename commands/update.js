module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Értesítés')
        .setURL('')
        .setTimestamp()
        .setDescription('Parancsnokok\n\nA Facebook bejelentkező hiba meg lett oldva. Parancsnokok mostantól be fognak tudni jelentkezni a facebook felhasználójukkal. Azonban, mivel a Facebookal mostanában több hiba is felmerült, a Főhadiszállás erősen ajánlja, hogy vagy Twitterrel vagy a Yostarral is kösd össze a felhasználódat.')
        .setImage('https://images-ext-1.discordapp.net/external/vaDLFsI5igNpQ4bO_5Ufal06OmUkuRwI71-nT7xsz9g/https/images-ext-2.discordapp.net/external/9NTkVab8vxCxJ9usxuWF7C_QAiBrWZ9tCx99hhzdRmA/https/pbs.twimg.com/media/FCX3C50VgAMoOLN.jpg%253Alarge')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

