module.exports = {
    name: 'update3',
    description: 'update3',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle('【Megjegyzés】')
        .setURL('')
        .setTimestamp()
        .setDescription('Parancsnok, a SY-1 rakétákhoz való fejlesztés general partokba fognak kerülni. Minden <:Pnz:790201580812894218> és main gun part amelyek a fejlesztésére lett elköltve, a játékon belüli e-mailben visszaküldjük. Elnézést a kellemetlenségért és köszönjük a támogatást.')
        .setImage('https://images-ext-2.discordapp.net/external/3wjj99RZuroj5FtlyQdJymGnIcYStPS-o5ZKD3vmB4U/https/pbs.twimg.com/media/FLOjZwsVgAITKss.jpg%3Alarge?width=960&height=548')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update3);
        if (update3){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}